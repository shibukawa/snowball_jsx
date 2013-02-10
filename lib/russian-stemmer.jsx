// This file was generated automatically by the Snowball to JSX compiler

import "snowball-stemmer.jsx";
import "among.jsx";

 /**
  * This class was automatically generated by a Snowball to JSX compiler
  * It implements the stemming algorithm defined by a snowball script.
  */

class RussianStemmer extends SnowballStemmer
{
    static const serialVersionUID = 1;
    static const methodObject = new RussianStemmer();

    static const a_0 = [
        new Among("\u0432", -1, 1, null, null),
        new Among("\u0438\u0432", 0, 2, null, null),
        new Among("\u044B\u0432", 0, 2, null, null),
        new Among("\u0432\u0448\u0438", -1, 1, null, null),
        new Among("\u0438\u0432\u0448\u0438", 3, 2, null, null),
        new Among("\u044B\u0432\u0448\u0438", 3, 2, null, null),
        new Among("\u0432\u0448\u0438\u0441\u044C", -1, 1, null, null),
        new Among("\u0438\u0432\u0448\u0438\u0441\u044C", 6, 2, null, null),
        new Among("\u044B\u0432\u0448\u0438\u0441\u044C", 6, 2, null, null)
    ];

    static const a_1 = [
        new Among("\u0435\u0435", -1, 1, null, null),
        new Among("\u0438\u0435", -1, 1, null, null),
        new Among("\u043E\u0435", -1, 1, null, null),
        new Among("\u044B\u0435", -1, 1, null, null),
        new Among("\u0438\u043C\u0438", -1, 1, null, null),
        new Among("\u044B\u043C\u0438", -1, 1, null, null),
        new Among("\u0435\u0439", -1, 1, null, null),
        new Among("\u0438\u0439", -1, 1, null, null),
        new Among("\u043E\u0439", -1, 1, null, null),
        new Among("\u044B\u0439", -1, 1, null, null),
        new Among("\u0435\u043C", -1, 1, null, null),
        new Among("\u0438\u043C", -1, 1, null, null),
        new Among("\u043E\u043C", -1, 1, null, null),
        new Among("\u044B\u043C", -1, 1, null, null),
        new Among("\u0435\u0433\u043E", -1, 1, null, null),
        new Among("\u043E\u0433\u043E", -1, 1, null, null),
        new Among("\u0435\u043C\u0443", -1, 1, null, null),
        new Among("\u043E\u043C\u0443", -1, 1, null, null),
        new Among("\u0438\u0445", -1, 1, null, null),
        new Among("\u044B\u0445", -1, 1, null, null),
        new Among("\u0435\u044E", -1, 1, null, null),
        new Among("\u043E\u044E", -1, 1, null, null),
        new Among("\u0443\u044E", -1, 1, null, null),
        new Among("\u044E\u044E", -1, 1, null, null),
        new Among("\u0430\u044F", -1, 1, null, null),
        new Among("\u044F\u044F", -1, 1, null, null)
    ];

    static const a_2 = [
        new Among("\u0435\u043C", -1, 1, null, null),
        new Among("\u043D\u043D", -1, 1, null, null),
        new Among("\u0432\u0448", -1, 1, null, null),
        new Among("\u0438\u0432\u0448", 2, 2, null, null),
        new Among("\u044B\u0432\u0448", 2, 2, null, null),
        new Among("\u0449", -1, 1, null, null),
        new Among("\u044E\u0449", 5, 1, null, null),
        new Among("\u0443\u044E\u0449", 6, 2, null, null)
    ];

    static const a_3 = [
        new Among("\u0441\u044C", -1, 1, null, null),
        new Among("\u0441\u044F", -1, 1, null, null)
    ];

    static const a_4 = [
        new Among("\u043B\u0430", -1, 1, null, null),
        new Among("\u0438\u043B\u0430", 0, 2, null, null),
        new Among("\u044B\u043B\u0430", 0, 2, null, null),
        new Among("\u043D\u0430", -1, 1, null, null),
        new Among("\u0435\u043D\u0430", 3, 2, null, null),
        new Among("\u0435\u0442\u0435", -1, 1, null, null),
        new Among("\u0438\u0442\u0435", -1, 2, null, null),
        new Among("\u0439\u0442\u0435", -1, 1, null, null),
        new Among("\u0435\u0439\u0442\u0435", 7, 2, null, null),
        new Among("\u0443\u0439\u0442\u0435", 7, 2, null, null),
        new Among("\u043B\u0438", -1, 1, null, null),
        new Among("\u0438\u043B\u0438", 10, 2, null, null),
        new Among("\u044B\u043B\u0438", 10, 2, null, null),
        new Among("\u0439", -1, 1, null, null),
        new Among("\u0435\u0439", 13, 2, null, null),
        new Among("\u0443\u0439", 13, 2, null, null),
        new Among("\u043B", -1, 1, null, null),
        new Among("\u0438\u043B", 16, 2, null, null),
        new Among("\u044B\u043B", 16, 2, null, null),
        new Among("\u0435\u043C", -1, 1, null, null),
        new Among("\u0438\u043C", -1, 2, null, null),
        new Among("\u044B\u043C", -1, 2, null, null),
        new Among("\u043D", -1, 1, null, null),
        new Among("\u0435\u043D", 22, 2, null, null),
        new Among("\u043B\u043E", -1, 1, null, null),
        new Among("\u0438\u043B\u043E", 24, 2, null, null),
        new Among("\u044B\u043B\u043E", 24, 2, null, null),
        new Among("\u043D\u043E", -1, 1, null, null),
        new Among("\u0435\u043D\u043E", 27, 2, null, null),
        new Among("\u043D\u043D\u043E", 27, 1, null, null),
        new Among("\u0435\u0442", -1, 1, null, null),
        new Among("\u0443\u0435\u0442", 30, 2, null, null),
        new Among("\u0438\u0442", -1, 2, null, null),
        new Among("\u044B\u0442", -1, 2, null, null),
        new Among("\u044E\u0442", -1, 1, null, null),
        new Among("\u0443\u044E\u0442", 34, 2, null, null),
        new Among("\u044F\u0442", -1, 2, null, null),
        new Among("\u043D\u044B", -1, 1, null, null),
        new Among("\u0435\u043D\u044B", 37, 2, null, null),
        new Among("\u0442\u044C", -1, 1, null, null),
        new Among("\u0438\u0442\u044C", 39, 2, null, null),
        new Among("\u044B\u0442\u044C", 39, 2, null, null),
        new Among("\u0435\u0448\u044C", -1, 1, null, null),
        new Among("\u0438\u0448\u044C", -1, 2, null, null),
        new Among("\u044E", -1, 2, null, null),
        new Among("\u0443\u044E", 44, 2, null, null)
    ];

    static const a_5 = [
        new Among("\u0430", -1, 1, null, null),
        new Among("\u0435\u0432", -1, 1, null, null),
        new Among("\u043E\u0432", -1, 1, null, null),
        new Among("\u0435", -1, 1, null, null),
        new Among("\u0438\u0435", 3, 1, null, null),
        new Among("\u044C\u0435", 3, 1, null, null),
        new Among("\u0438", -1, 1, null, null),
        new Among("\u0435\u0438", 6, 1, null, null),
        new Among("\u0438\u0438", 6, 1, null, null),
        new Among("\u0430\u043C\u0438", 6, 1, null, null),
        new Among("\u044F\u043C\u0438", 6, 1, null, null),
        new Among("\u0438\u044F\u043C\u0438", 10, 1, null, null),
        new Among("\u0439", -1, 1, null, null),
        new Among("\u0435\u0439", 12, 1, null, null),
        new Among("\u0438\u0435\u0439", 13, 1, null, null),
        new Among("\u0438\u0439", 12, 1, null, null),
        new Among("\u043E\u0439", 12, 1, null, null),
        new Among("\u0430\u043C", -1, 1, null, null),
        new Among("\u0435\u043C", -1, 1, null, null),
        new Among("\u0438\u0435\u043C", 18, 1, null, null),
        new Among("\u043E\u043C", -1, 1, null, null),
        new Among("\u044F\u043C", -1, 1, null, null),
        new Among("\u0438\u044F\u043C", 21, 1, null, null),
        new Among("\u043E", -1, 1, null, null),
        new Among("\u0443", -1, 1, null, null),
        new Among("\u0430\u0445", -1, 1, null, null),
        new Among("\u044F\u0445", -1, 1, null, null),
        new Among("\u0438\u044F\u0445", 26, 1, null, null),
        new Among("\u044B", -1, 1, null, null),
        new Among("\u044C", -1, 1, null, null),
        new Among("\u044E", -1, 1, null, null),
        new Among("\u0438\u044E", 30, 1, null, null),
        new Among("\u044C\u044E", 30, 1, null, null),
        new Among("\u044F", -1, 1, null, null),
        new Among("\u0438\u044F", 33, 1, null, null),
        new Among("\u044C\u044F", 33, 1, null, null)
    ];

    static const a_6 = [
        new Among("\u043E\u0441\u0442", -1, 1, null, null),
        new Among("\u043E\u0441\u0442\u044C", -1, 1, null, null)
    ];

    static const a_7 = [
        new Among("\u0435\u0439\u0448\u0435", -1, 1, null, null),
        new Among("\u043D", -1, 2, null, null),
        new Among("\u0435\u0439\u0448", -1, 1, null, null),
        new Among("\u044C", -1, 3, null, null)
    ];

    static const g_v = [33, 65, 8, 232] : int[];

    var I_p2 : int = 0;
    var I_pV : int = 0;

    function copy_from (other : RussianStemmer) : void
    {
        this.I_p2 = other.I_p2;
        this.I_pV = other.I_pV;
        super.copy_from(other);
    }

    function r_mark_regions () : boolean
    {
        var v_1 : int;
        // (, line 57
        this.I_pV = this.limit;
        this.I_p2 = this.limit;
        // do, line 61
        v_1 = this.cursor;
        var lab0 = true;
        lab0: while (lab0 == true)
        {
            lab0 = false;
            // (, line 61
            // gopast, line 62
            golab1: while(true)
            {
                var lab2 = true;
                lab2: while (lab2 == true)
                {
                    lab2 = false;
                    if (!(this.in_grouping(RussianStemmer.g_v, 1072, 1103)))
                    {
                        break lab2;
                    }
                    break golab1;
                }
                if (this.cursor >= this.limit)
                {
                    break lab0;
                }
                this.cursor++;
            }
            // setmark pV, line 62
            this.I_pV = this.cursor;
            // gopast, line 62
            golab3: while(true)
            {
                var lab4 = true;
                lab4: while (lab4 == true)
                {
                    lab4 = false;
                    if (!(this.out_grouping(RussianStemmer.g_v, 1072, 1103)))
                    {
                        break lab4;
                    }
                    break golab3;
                }
                if (this.cursor >= this.limit)
                {
                    break lab0;
                }
                this.cursor++;
            }
            // gopast, line 63
            golab5: while(true)
            {
                var lab6 = true;
                lab6: while (lab6 == true)
                {
                    lab6 = false;
                    if (!(this.in_grouping(RussianStemmer.g_v, 1072, 1103)))
                    {
                        break lab6;
                    }
                    break golab5;
                }
                if (this.cursor >= this.limit)
                {
                    break lab0;
                }
                this.cursor++;
            }
            // gopast, line 63
            golab7: while(true)
            {
                var lab8 = true;
                lab8: while (lab8 == true)
                {
                    lab8 = false;
                    if (!(this.out_grouping(RussianStemmer.g_v, 1072, 1103)))
                    {
                        break lab8;
                    }
                    break golab7;
                }
                if (this.cursor >= this.limit)
                {
                    break lab0;
                }
                this.cursor++;
            }
            // setmark p2, line 63
            this.I_p2 = this.cursor;
        }
        this.cursor = v_1;
        return true;
    }

    function r_R2 () : boolean
    {
        if (!(this.I_p2 <= this.cursor))
        {
            return false;
        }
        return true;
    }

    function r_perfective_gerund () : boolean
    {
        var among_var : int;
        var v_1 : int;
        // (, line 71
        // [, line 72
        this.ket = this.cursor;
        // substring, line 72
        among_var = this.find_among_b(RussianStemmer.a_0, 9);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 72
        this.bra = this.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 76
                // or, line 76
                var lab0 = true;
                lab0: while (lab0 == true)
                {
                    lab0 = false;
                    v_1 = this.limit - this.cursor;
                    var lab1 = true;
                    lab1: while (lab1 == true)
                    {
                        lab1 = false;
                        // literal, line 76
                        if (!(this.eq_s_b(1, "\u0430")))
                        {
                            break lab1;
                        }
                        break lab0;
                    }
                    this.cursor = this.limit - v_1;
                    // literal, line 76
                    if (!(this.eq_s_b(1, "\u044F")))
                    {
                        return false;
                    }
                }
                // delete, line 76
                if (!this.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 83
                // delete, line 83
                if (!this.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    }

    function r_adjective () : boolean
    {
        var among_var : int;
        // (, line 87
        // [, line 88
        this.ket = this.cursor;
        // substring, line 88
        among_var = this.find_among_b(RussianStemmer.a_1, 26);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 88
        this.bra = this.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 97
                // delete, line 97
                if (!this.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    }

    function r_adjectival () : boolean
    {
        var among_var : int;
        var v_1 : int;
        var v_2 : int;
        // (, line 101
        // call adjective, line 102
        if (!this.r_adjective())
        {
            return false;
        }
        // try, line 109
        v_1 = this.limit - this.cursor;
        var lab0 = true;
        lab0: while (lab0 == true)
        {
            lab0 = false;
            // (, line 109
            // [, line 110
            this.ket = this.cursor;
            // substring, line 110
            among_var = this.find_among_b(RussianStemmer.a_2, 8);
            if (among_var == 0)
            {
                this.cursor = this.limit - v_1;
                break lab0;
            }
            // ], line 110
            this.bra = this.cursor;
            switch (among_var) {
                case 0:
                    this.cursor = this.limit - v_1;
                    break lab0;
                case 1:
                    // (, line 115
                    // or, line 115
                    var lab1 = true;
                    lab1: while (lab1 == true)
                    {
                        lab1 = false;
                        v_2 = this.limit - this.cursor;
                        var lab2 = true;
                        lab2: while (lab2 == true)
                        {
                            lab2 = false;
                            // literal, line 115
                            if (!(this.eq_s_b(1, "\u0430")))
                            {
                                break lab2;
                            }
                            break lab1;
                        }
                        this.cursor = this.limit - v_2;
                        // literal, line 115
                        if (!(this.eq_s_b(1, "\u044F")))
                        {
                            this.cursor = this.limit - v_1;
                            break lab0;
                        }
                    }
                    // delete, line 115
                    if (!this.slice_del())
                    {
                        return false;
                    }
                    break;
                case 2:
                    // (, line 122
                    // delete, line 122
                    if (!this.slice_del())
                    {
                        return false;
                    }
                    break;
            }
        }
        return true;
    }

    function r_reflexive () : boolean
    {
        var among_var : int;
        // (, line 128
        // [, line 129
        this.ket = this.cursor;
        // substring, line 129
        among_var = this.find_among_b(RussianStemmer.a_3, 2);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 129
        this.bra = this.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 132
                // delete, line 132
                if (!this.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    }

    function r_verb () : boolean
    {
        var among_var : int;
        var v_1 : int;
        // (, line 136
        // [, line 137
        this.ket = this.cursor;
        // substring, line 137
        among_var = this.find_among_b(RussianStemmer.a_4, 46);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 137
        this.bra = this.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 143
                // or, line 143
                var lab0 = true;
                lab0: while (lab0 == true)
                {
                    lab0 = false;
                    v_1 = this.limit - this.cursor;
                    var lab1 = true;
                    lab1: while (lab1 == true)
                    {
                        lab1 = false;
                        // literal, line 143
                        if (!(this.eq_s_b(1, "\u0430")))
                        {
                            break lab1;
                        }
                        break lab0;
                    }
                    this.cursor = this.limit - v_1;
                    // literal, line 143
                    if (!(this.eq_s_b(1, "\u044F")))
                    {
                        return false;
                    }
                }
                // delete, line 143
                if (!this.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 151
                // delete, line 151
                if (!this.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    }

    function r_noun () : boolean
    {
        var among_var : int;
        // (, line 159
        // [, line 160
        this.ket = this.cursor;
        // substring, line 160
        among_var = this.find_among_b(RussianStemmer.a_5, 36);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 160
        this.bra = this.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 167
                // delete, line 167
                if (!this.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    }

    function r_derivational () : boolean
    {
        var among_var : int;
        // (, line 175
        // [, line 176
        this.ket = this.cursor;
        // substring, line 176
        among_var = this.find_among_b(RussianStemmer.a_6, 2);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 176
        this.bra = this.cursor;
        // call R2, line 176
        if (!this.r_R2())
        {
            return false;
        }
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 179
                // delete, line 179
                if (!this.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    }

    function r_tidy_up () : boolean
    {
        var among_var : int;
        // (, line 183
        // [, line 184
        this.ket = this.cursor;
        // substring, line 184
        among_var = this.find_among_b(RussianStemmer.a_7, 4);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 184
        this.bra = this.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 188
                // delete, line 188
                if (!this.slice_del())
                {
                    return false;
                }
                // [, line 189
                this.ket = this.cursor;
                // literal, line 189
                if (!(this.eq_s_b(1, "\u043D")))
                {
                    return false;
                }
                // ], line 189
                this.bra = this.cursor;
                // literal, line 189
                if (!(this.eq_s_b(1, "\u043D")))
                {
                    return false;
                }
                // delete, line 189
                if (!this.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 192
                // literal, line 192
                if (!(this.eq_s_b(1, "\u043D")))
                {
                    return false;
                }
                // delete, line 192
                if (!this.slice_del())
                {
                    return false;
                }
                break;
            case 3:
                // (, line 194
                // delete, line 194
                if (!this.slice_del())
                {
                    return false;
                }
                break;
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
        var v_6 : int;
        var v_7 : int;
        var v_8 : int;
        var v_9 : int;
        var v_10 : int;
        // (, line 199
        // do, line 201
        v_1 = this.cursor;
        var lab0 = true;
        lab0: while (lab0 == true)
        {
            lab0 = false;
            // call mark_regions, line 201
            if (!this.r_mark_regions())
            {
                break lab0;
            }
        }
        this.cursor = v_1;
        // backwards, line 202
        this.limit_backward = this.cursor; this.cursor = this.limit;
        // setlimit, line 202
        v_2 = this.limit - this.cursor;
        // tomark, line 202
        if (this.cursor < this.I_pV)
        {
            return false;
        }
        this.cursor = this.I_pV;
        v_3 = this.limit_backward;
        this.limit_backward = this.cursor;
        this.cursor = this.limit - v_2;
        // (, line 202
        // do, line 203
        v_4 = this.limit - this.cursor;
        var lab1 = true;
        lab1: while (lab1 == true)
        {
            lab1 = false;
            // (, line 203
            // or, line 204
            var lab2 = true;
            lab2: while (lab2 == true)
            {
                lab2 = false;
                v_5 = this.limit - this.cursor;
                var lab3 = true;
                lab3: while (lab3 == true)
                {
                    lab3 = false;
                    // call perfective_gerund, line 204
                    if (!this.r_perfective_gerund())
                    {
                        break lab3;
                    }
                    break lab2;
                }
                this.cursor = this.limit - v_5;
                // (, line 205
                // try, line 205
                v_6 = this.limit - this.cursor;
                var lab4 = true;
                lab4: while (lab4 == true)
                {
                    lab4 = false;
                    // call reflexive, line 205
                    if (!this.r_reflexive())
                    {
                        this.cursor = this.limit - v_6;
                        break lab4;
                    }
                }
                // or, line 206
                var lab5 = true;
                lab5: while (lab5 == true)
                {
                    lab5 = false;
                    v_7 = this.limit - this.cursor;
                    var lab6 = true;
                    lab6: while (lab6 == true)
                    {
                        lab6 = false;
                        // call adjectival, line 206
                        if (!this.r_adjectival())
                        {
                            break lab6;
                        }
                        break lab5;
                    }
                    this.cursor = this.limit - v_7;
                    var lab7 = true;
                    lab7: while (lab7 == true)
                    {
                        lab7 = false;
                        // call verb, line 206
                        if (!this.r_verb())
                        {
                            break lab7;
                        }
                        break lab5;
                    }
                    this.cursor = this.limit - v_7;
                    // call noun, line 206
                    if (!this.r_noun())
                    {
                        break lab1;
                    }
                }
            }
        }
        this.cursor = this.limit - v_4;
        // try, line 209
        v_8 = this.limit - this.cursor;
        var lab8 = true;
        lab8: while (lab8 == true)
        {
            lab8 = false;
            // (, line 209
            // [, line 209
            this.ket = this.cursor;
            // literal, line 209
            if (!(this.eq_s_b(1, "\u0438")))
            {
                this.cursor = this.limit - v_8;
                break lab8;
            }
            // ], line 209
            this.bra = this.cursor;
            // delete, line 209
            if (!this.slice_del())
            {
                return false;
            }
        }
        // do, line 212
        v_9 = this.limit - this.cursor;
        var lab9 = true;
        lab9: while (lab9 == true)
        {
            lab9 = false;
            // call derivational, line 212
            if (!this.r_derivational())
            {
                break lab9;
            }
        }
        this.cursor = this.limit - v_9;
        // do, line 213
        v_10 = this.limit - this.cursor;
        var lab10 = true;
        lab10: while (lab10 == true)
        {
            lab10 = false;
            // call tidy_up, line 213
            if (!this.r_tidy_up())
            {
                break lab10;
            }
        }
        this.cursor = this.limit - v_10;
        this.limit_backward = v_3;
        this.cursor = this.limit_backward;        return true;
    }

    function equals (o : variant) : boolean {
        return o instanceof RussianStemmer;
    }

    function hashCode() : int
    {
        //http://stackoverflow.com/questions/194846/is-there-any-kind-of-hashcode-function-in-javascript
        var classname = "RussianStemmer";
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

