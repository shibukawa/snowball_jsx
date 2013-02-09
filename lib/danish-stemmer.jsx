// This file was generated automatically by the Snowball to JSX compiler

import "snowball-stemmer.jsx";
import "among.jsx";

 /**
  * This class was automatically generated by a Snowball to JSX compiler
  * It implements the stemming algorithm defined by a snowball script.
  */

class DanishStemmer extends SnowballStemmer
{
    static const serialVersionUID = 1;
    static const methodObject = new DanishStemmer();

    static const a_0 = [
        new Among("hed", -1, 1, "", DanishStemmer.methodObject),
        new Among("ethed", 0, 1, "", DanishStemmer.methodObject),
        new Among("ered", -1, 1, "", DanishStemmer.methodObject),
        new Among("e", -1, 1, "", DanishStemmer.methodObject),
        new Among("erede", 3, 1, "", DanishStemmer.methodObject),
        new Among("ende", 3, 1, "", DanishStemmer.methodObject),
        new Among("erende", 5, 1, "", DanishStemmer.methodObject),
        new Among("ene", 3, 1, "", DanishStemmer.methodObject),
        new Among("erne", 3, 1, "", DanishStemmer.methodObject),
        new Among("ere", 3, 1, "", DanishStemmer.methodObject),
        new Among("en", -1, 1, "", DanishStemmer.methodObject),
        new Among("heden", 10, 1, "", DanishStemmer.methodObject),
        new Among("eren", 10, 1, "", DanishStemmer.methodObject),
        new Among("er", -1, 1, "", DanishStemmer.methodObject),
        new Among("heder", 13, 1, "", DanishStemmer.methodObject),
        new Among("erer", 13, 1, "", DanishStemmer.methodObject),
        new Among("s", -1, 2, "", DanishStemmer.methodObject),
        new Among("heds", 16, 1, "", DanishStemmer.methodObject),
        new Among("es", 16, 1, "", DanishStemmer.methodObject),
        new Among("endes", 18, 1, "", DanishStemmer.methodObject),
        new Among("erendes", 19, 1, "", DanishStemmer.methodObject),
        new Among("enes", 18, 1, "", DanishStemmer.methodObject),
        new Among("ernes", 18, 1, "", DanishStemmer.methodObject),
        new Among("eres", 18, 1, "", DanishStemmer.methodObject),
        new Among("ens", 16, 1, "", DanishStemmer.methodObject),
        new Among("hedens", 24, 1, "", DanishStemmer.methodObject),
        new Among("erens", 24, 1, "", DanishStemmer.methodObject),
        new Among("ers", 16, 1, "", DanishStemmer.methodObject),
        new Among("ets", 16, 1, "", DanishStemmer.methodObject),
        new Among("erets", 28, 1, "", DanishStemmer.methodObject),
        new Among("et", -1, 1, "", DanishStemmer.methodObject),
        new Among("eret", 30, 1, "", DanishStemmer.methodObject)
    ];

    static const a_1 = [
        new Among("gd", -1, -1, "", DanishStemmer.methodObject),
        new Among("dt", -1, -1, "", DanishStemmer.methodObject),
        new Among("gt", -1, -1, "", DanishStemmer.methodObject),
        new Among("kt", -1, -1, "", DanishStemmer.methodObject)
    ];

    static const a_2 = [
        new Among("ig", -1, 1, "", DanishStemmer.methodObject),
        new Among("lig", 0, 1, "", DanishStemmer.methodObject),
        new Among("elig", 1, 1, "", DanishStemmer.methodObject),
        new Among("els", -1, 1, "", DanishStemmer.methodObject),
        new Among("l\u00F8st", -1, 2, "", DanishStemmer.methodObject)
    ];

    static const g_v = [17, 65, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 128] : int[];

    static const g_s_ending = [239, 254, 42, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16] : int[];

    var I_x : int = 0;
    var I_p1 : int = 0;
    var S_ch : string = "";

    function copy_from (other : DanishStemmer) : void
    {
        this.I_x = other.I_x;
        this.I_p1 = other.I_p1;
        this.S_ch = other.S_ch;
        super.copy_from(other);
    }

    function r_mark_regions () : boolean
    {
        var v_1 : int;
        var v_2 : int;
        // (, line 29
        this.I_p1 = this.limit;
        // test, line 33
        v_1 = this.cursor;
        // (, line 33
        // hop, line 33
        {
            var c : int = this.cursor + 3;
            if (0 > c || c > this.limit)
            {
                return false;
            }
            this.cursor = c;
        }
        // setmark x, line 33
        this.I_x = this.cursor;
        this.cursor = v_1;
        // goto, line 34
        golab0: while(true)
        {
            v_2 = this.cursor;
            var lab1 = true;
            lab1: while (lab1 == true)
            {
                lab1 = false;
                if (!(this.in_grouping(DanishStemmer.g_v, 97, 248)))
                {
                    break lab1;
                }
                this.cursor = v_2;
                break golab0;
            }
            this.cursor = v_2;
            if (this.cursor >= this.limit)
            {
                return false;
            }
            this.cursor++;
        }
        // gopast, line 34
        golab2: while(true)
        {
            var lab3 = true;
            lab3: while (lab3 == true)
            {
                lab3 = false;
                if (!(this.out_grouping(DanishStemmer.g_v, 97, 248)))
                {
                    break lab3;
                }
                break golab2;
            }
            if (this.cursor >= this.limit)
            {
                return false;
            }
            this.cursor++;
        }
        // setmark p1, line 34
        this.I_p1 = this.cursor;
        // try, line 35
        var lab4 = true;
        lab4: while (lab4 == true)
        {
            lab4 = false;
            // (, line 35
            if (!(this.I_p1 < this.I_x))
            {
                break lab4;
            }
            this.I_p1 = this.I_x;
        }
        return true;
    }

    function r_main_suffix () : boolean
    {
        var among_var : int;
        var v_1 : int;
        var v_2 : int;
        // (, line 40
        // setlimit, line 41
        v_1 = this.limit - this.cursor;
        // tomark, line 41
        if (this.cursor < this.I_p1)
        {
            return false;
        }
        this.cursor = this.I_p1;
        v_2 = this.limit_backward;
        this.limit_backward = this.cursor;
        this.cursor = this.limit - v_1;
        // (, line 41
        // [, line 41
        this.ket = this.cursor;
        // substring, line 41
        among_var = this.find_among_b(DanishStemmer.a_0, 32);
        if (among_var == 0)
        {
            this.limit_backward = v_2;
            return false;
        }
        // ], line 41
        this.bra = this.cursor;
        this.limit_backward = v_2;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 48
                // delete, line 48
                if (!this.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 50
                if (!(this.in_grouping_b(DanishStemmer.g_s_ending, 97, 229)))
                {
                    return false;
                }
                // delete, line 50
                if (!this.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    }

    function r_consonant_pair () : boolean
    {
        var v_1 : int;
        var v_2 : int;
        var v_3 : int;
        // (, line 54
        // test, line 55
        v_1 = this.limit - this.cursor;
        // (, line 55
        // setlimit, line 56
        v_2 = this.limit - this.cursor;
        // tomark, line 56
        if (this.cursor < this.I_p1)
        {
            return false;
        }
        this.cursor = this.I_p1;
        v_3 = this.limit_backward;
        this.limit_backward = this.cursor;
        this.cursor = this.limit - v_2;
        // (, line 56
        // [, line 56
        this.ket = this.cursor;
        // substring, line 56
        if (this.find_among_b(DanishStemmer.a_1, 4) == 0)
        {
            this.limit_backward = v_3;
            return false;
        }
        // ], line 56
        this.bra = this.cursor;
        this.limit_backward = v_3;
        this.cursor = this.limit - v_1;
        // next, line 62
        if (this.cursor <= this.limit_backward)
        {
            return false;
        }
        this.cursor--;
        // ], line 62
        this.bra = this.cursor;
        // delete, line 62
        if (!this.slice_del())
        {
            return false;
        }
        return true;
    }

    function r_other_suffix () : boolean
    {
        var among_var : int;
        var v_1 : int;
        var v_2 : int;
        var v_3 : int;
        var v_4 : int;
        // (, line 65
        // do, line 66
        v_1 = this.limit - this.cursor;
        var lab0 = true;
        lab0: while (lab0 == true)
        {
            lab0 = false;
            // (, line 66
            // [, line 66
            this.ket = this.cursor;
            // literal, line 66
            if (!(this.eq_s_b(2, "st")))
            {
                break lab0;
            }
            // ], line 66
            this.bra = this.cursor;
            // literal, line 66
            if (!(this.eq_s_b(2, "ig")))
            {
                break lab0;
            }
            // delete, line 66
            if (!this.slice_del())
            {
                return false;
            }
        }
        this.cursor = this.limit - v_1;
        // setlimit, line 67
        v_2 = this.limit - this.cursor;
        // tomark, line 67
        if (this.cursor < this.I_p1)
        {
            return false;
        }
        this.cursor = this.I_p1;
        v_3 = this.limit_backward;
        this.limit_backward = this.cursor;
        this.cursor = this.limit - v_2;
        // (, line 67
        // [, line 67
        this.ket = this.cursor;
        // substring, line 67
        among_var = this.find_among_b(DanishStemmer.a_2, 5);
        if (among_var == 0)
        {
            this.limit_backward = v_3;
            return false;
        }
        // ], line 67
        this.bra = this.cursor;
        this.limit_backward = v_3;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 70
                // delete, line 70
                if (!this.slice_del())
                {
                    return false;
                }
                // do, line 70
                v_4 = this.limit - this.cursor;
                var lab1 = true;
                lab1: while (lab1 == true)
                {
                    lab1 = false;
                    // call consonant_pair, line 70
                    if (!this.r_consonant_pair())
                    {
                        break lab1;
                    }
                }
                this.cursor = this.limit - v_4;
                break;
            case 2:
                // (, line 72
                // <-, line 72
                if (!this.slice_from("l\u00F8s"))
                {
                    return false;
                }
                break;
        }
        return true;
    }

    function r_undouble () : boolean
    {
        var v_1 : int;
        var v_2 : int;
        // (, line 75
        // setlimit, line 76
        v_1 = this.limit - this.cursor;
        // tomark, line 76
        if (this.cursor < this.I_p1)
        {
            return false;
        }
        this.cursor = this.I_p1;
        v_2 = this.limit_backward;
        this.limit_backward = this.cursor;
        this.cursor = this.limit - v_1;
        // (, line 76
        // [, line 76
        this.ket = this.cursor;
        if (!(this.out_grouping_b(DanishStemmer.g_v, 97, 248)))
        {
            this.limit_backward = v_2;
            return false;
        }
        // ], line 76
        this.bra = this.cursor;
        // -> ch, line 76
        this.S_ch = this.slice_to(this.S_ch);
        if (S_ch == null)
        {
            return false;
        }
        this.limit_backward = v_2;
        // name ch, line 77
        if (!(this.eq_v_b(this.S_ch)))
        {
            return false;
        }
        // delete, line 78
        if (!this.slice_del())
        {
            return false;
        }
        return true;
    }

    override function stem () : boolean
    {
        var v_1 : int;
        var v_2 : int;
        var v_3 : int;
        var v_4 : int;
        var v_5 : int;
        // (, line 82
        // do, line 84
        v_1 = this.cursor;
        var lab0 = true;
        lab0: while (lab0 == true)
        {
            lab0 = false;
            // call mark_regions, line 84
            if (!this.r_mark_regions())
            {
                break lab0;
            }
        }
        this.cursor = v_1;
        // backwards, line 85
        this.limit_backward = this.cursor; this.cursor = this.limit;
        // (, line 85
        // do, line 86
        v_2 = this.limit - this.cursor;
        var lab1 = true;
        lab1: while (lab1 == true)
        {
            lab1 = false;
            // call main_suffix, line 86
            if (!this.r_main_suffix())
            {
                break lab1;
            }
        }
        this.cursor = this.limit - v_2;
        // do, line 87
        v_3 = this.limit - this.cursor;
        var lab2 = true;
        lab2: while (lab2 == true)
        {
            lab2 = false;
            // call consonant_pair, line 87
            if (!this.r_consonant_pair())
            {
                break lab2;
            }
        }
        this.cursor = this.limit - v_3;
        // do, line 88
        v_4 = this.limit - this.cursor;
        var lab3 = true;
        lab3: while (lab3 == true)
        {
            lab3 = false;
            // call other_suffix, line 88
            if (!this.r_other_suffix())
            {
                break lab3;
            }
        }
        this.cursor = this.limit - v_4;
        // do, line 89
        v_5 = this.limit - this.cursor;
        var lab4 = true;
        lab4: while (lab4 == true)
        {
            lab4 = false;
            // call undouble, line 89
            if (!this.r_undouble())
            {
                break lab4;
            }
        }
        this.cursor = this.limit - v_5;
        this.cursor = this.limit_backward;        return true;
    }

    function equals (o : variant) : boolean {
        return o instanceof DanishStemmer;
    }

    function hashCode() : int
    {
        //http://stackoverflow.com/questions/194846/is-there-any-kind-of-hashcode-function-in-javascript
        var classname = "DanishStemmer";
        var hash = 0;
        if (classname.length == 0) return hash;
        for (var i = 0; i < classname.length; i++) {
            var char = classname.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    }

}

