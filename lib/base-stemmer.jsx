import "stemmer.jsx";
import "among.jsx";

class BaseStemmer implements Stemmer
{
    // this.current string
    var current : string;
    var cursor : int;
    var limit : int;
    var limit_backward : int;
    var bra : int;
    var ket : int;

    function constructor ()
    {
	this.setCurrent("");
    }

    /**
     * Set the this.current string.
     */
    function setCurrent (value : string) : void
    {
        this.current = value;
	this.cursor = 0;
	this.limit = this.current.length;
	this.limit_backward = 0;
	this.bra = this.cursor;
	this.ket = this.limit;
    }

    /**
     * Get the this.current string.
     */
    function getCurrent () : string
    {
        return this.current;
    }


    function copy_from (other : BaseStemmer) : void
    {
	this.current          = other.current;
	this.cursor           = other.cursor;
	this.limit            = other.limit;
	this.limit_backward   = other.limit_backward;
	this.bra              = other.bra;
	this.ket              = other.ket;
    }

    function in_grouping (s : int[], min : int, max : int) : boolean
    {
	if (this.cursor >= this.limit) return false;
	var ch = this.current.charCodeAt(this.cursor);
	if (ch > max || ch < min) return false;
	ch -= min;
	if ((s[ch >>> 3] & (0x1 << (ch & 0x7))) == 0) return false;
	this.cursor++;
	return true;
    }

    function in_grouping_b (s : int[], min : int, max : int) : boolean
    {
	if (this.cursor <= this.limit_backward) return false;
	var ch = this.current.charCodeAt(this.cursor - 1);
	if (ch > max || ch < min) return false;
	ch -= min;
	if ((s[ch >>> 3] & (0x1 << (ch & 0x7))) == 0) return false;
	this.cursor--;
	return true;
    }

    function out_grouping (s : int[], min : int, max : int) : boolean
    {
	if (this.cursor >= this.limit) return false;
	var ch = this.current.charCodeAt(this.cursor);
	if (ch > max || ch < min) {
	    this.cursor++;
	    return true;
	}
	ch -= min;
	if ((s[ch >>> 3] & (0X1 << (ch & 0x7))) == 0) {
	    this.cursor++;
	    return true;
	}
	return false;
    }

    function out_grouping_b (s : int[], min : int, max : int) : boolean
    {
	if (this.cursor <= this.limit_backward) return false;
	var ch = this.current.charCodeAt(this.cursor - 1);
	if (ch > max || ch < min) {
	    this.cursor--;
	    return true;
	}
	ch -= min;
	if ((s[ch >>> 3] & (0x1 << (ch & 0x7))) == 0) {
	    this.cursor--;
	    return true;
	}
	return false;
    }

    function in_range (min : int, max : int) : boolean
    {
	if (this.cursor >= this.limit) return false;
	var ch = this.current.charCodeAt(this.cursor);
	if (ch > max || ch < min) return false;
	this.cursor++;
	return true;
    }

    function in_range_b (min : int, max : int) : boolean
    {
	if (this.cursor <= this.limit_backward) return false;
	var ch = this.current.charCodeAt(this.cursor - 1);
	if (ch > max || ch < min) return false;
	this.cursor--;
	return true;
    }

    function out_range (min : int, max : int) : boolean
    {
	if (this.cursor >= this.limit) return false;
	var ch = this.current.charCodeAt(this.cursor);
	if (!(ch > max || ch < min)) return false;
	this.cursor++;
	return true;
    }

    function out_range_b (min : int, max : int) : boolean
    {
	if (this.cursor <= this.limit_backward) return false;
	var ch = this.current.charCodeAt(this.cursor - 1);
	if(!(ch > max || ch < min)) return false;
	this.cursor--;
	return true;
    }

    function eq_s (s_size : int, s : string) : boolean
    {
	if (this.limit - this.cursor < s_size) return false;
        if (this.current.slice(this.cursor, this.cursor + s_size) != s)
        {
            return false;
        }
	this.cursor += s_size;
	return true;
    }

    function eq_s_b (s_size : int, s : string) : boolean
    {
	if (this.cursor - this.limit_backward < s_size) return false;
        if (this.current.slice(this.cursor - s_size, this.cursor) != s)
        {
            return false;
        }
	this.cursor -= s_size;
	return true;
    }

    function eq_v (s : string) : boolean
    {
	return this.eq_s(s.length, s);
    }

    function eq_v_b (s : string) : boolean
    {
        return this.eq_s_b(s.length, s);
    }

    function find_among (v : Among[], v_size : int) : int
    {
	var i = 0;
	var j = v_size;

	var c = this.cursor;
	var l = this.limit;

	var common_i = 0;
	var common_j = 0;

	var first_key_inspected = false;

	while (true)
        {
	    var k = i + ((j - i) >>> 1);
	    var diff = 0;
	    var common = common_i < common_j ? common_i : common_j; // smaller
	    var w = v[k];
	    var i2;
	    for (i2 = common; i2 < w.s_size; i2++)
            {
		if (c + common == l)
                {
		    diff = -1;
		    break;
		}
		diff = this.current.charCodeAt(c + common) - w.s.charCodeAt(i2);
		if (diff != 0) break;
		common++;
	    }
	    if (diff < 0)
            {
		j = k;
		common_j = common;
	    }
            else
            {
		i = k;
		common_i = common;
	    }
	    if (j - i <= 1)
            {
		if (i > 0) break; // v->s has been inspected
		if (j == i) break; // only one item in v

		// - but now we need to go round once more to get
		// v->s inspected. This looks messy, but is actually
		// the optimal approach.

		if (first_key_inspected) break;
		first_key_inspected = true;
	    }
	}
	while (true)
        {
	    var w = v[i];
	    if (common_i >= w.s_size)
            {
		this.cursor = c + w.s_size;
		if (w.method == null)
                {
                    return w.result;
                }
		var res = w.method(w.instance);
		this.cursor = c + w.s_size;
		if (res)
                {
                    return w.result;
                }
	    }
	    i = w.substring_i;
	    if (i < 0) return 0;
	}
        return -1; // not reachable
    }

    // find_among_b is for backwards processing. Same comments apply
    function find_among_b (v : Among[], v_size : int) : int
    {
	var i = 0;
	var j = v_size;

	var c = this.cursor;
	var lb = this.limit_backward;

	var common_i = 0;
	var common_j = 0;

	var first_key_inspected = false;

	while (true)
        {
	    var k = i + ((j - i) >> 1);
	    var diff = 0;
	    var common = common_i < common_j ? common_i : common_j;
	    var w = v[k];
	    var i2;
	    for (i2 = w.s_size - 1 - common; i2 >= 0; i2--)
            {
		if (c - common == lb)
                {
		    diff = -1;
		    break;
		}
		diff = this.current.charCodeAt(c - 1 - common) - w.s.charCodeAt(i2);
		if (diff != 0) break;
		common++;
	    }
	    if (diff < 0)
            {
		j = k;
		common_j = common;
	    }
            else
            {
		i = k;
		common_i = common;
	    }
	    if (j - i <= 1)
            {
		if (i > 0) break;
		if (j == i) break;
		if (first_key_inspected) break;
		first_key_inspected = true;
	    }
	}
	while (true)
        {
	    var w = v[i];
	    if (common_i >= w.s_size)
            {
		this.cursor = c - w.s_size;
		if (w.method == null) return w.result;
		var res = w.method(this);
		this.cursor = c - w.s_size;
		if (res) return w.result;
	    }
	    i = w.substring_i;
	    if (i < 0) return 0;
	}
        return -1; // not reachable
    }

    /* to replace chars between c_bra and c_ket in this.current by the
     * chars in s.
     */
    function replace_s (c_bra : int, c_ket : int, s : string) : int
    {
	var adjustment = s.length - (c_ket - c_bra);
	this.current = this.current.slice(0, c_bra) + s + this.current.slice(c_ket);
	this.limit += adjustment;
	if (this.cursor >= c_ket) this.cursor += adjustment;
	else if (this.cursor > c_bra) this.cursor = c_bra;
	return adjustment;
    }

    function slice_check () : boolean
    {
        if (this.bra < 0 ||
            this.bra > this.ket ||
            this.ket > this.limit ||
            this.limit > this.current.length)
        {
            return false;
        }
        return true;
    }

    function slice_from (s : string) : boolean
    {
        var result = false;
	if (this.slice_check())
        {
	    this.replace_s(this.bra, this.ket, s);
            result = true;
        }
        return result;
    }

    function slice_del () : boolean
    {
	return this.slice_from("");
    }

    function insert (c_bra : int, c_ket : int, s : string) : void
    {
        var adjustment = this.replace_s(c_bra, c_ket, s);
	if (c_bra <= this.bra) this.bra += adjustment;
	if (c_bra <= this.ket) this.ket += adjustment;
    }

    /* Copy the slice into the supplied StringBuffer */
    function slice_to (s : string) : string
    {
        var result = '';
	if (this.slice_check())
        {
            result = this.current.slice(this.bra, this.ket);
        }
        return result;
    }

    function assign_to (s : string) : string
    {
        return this.current.slice(0, this.limit);
    }

    function stem () : boolean
    {
        return false;
    }

    override function stem (input : string) : string
    {
        this.setCurrent(input);
        this.stem();
        return this.getCurrent();
    }

    override function stem (input : string, repeat : int) : string
    {
        this.setCurrent(input);
        for (var i = 0; i < repeat; i++)
        {
            this.stem();
        }
        return this.getCurrent();
    }
}
