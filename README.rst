Snowball stemming library collection for JSX
============================================

This document pertains to the JSX version of the stemmer library distribution,
available for download from:

* https://github.com/shibukawa/snowball_jsx/

Original program is maintained at following place:

* http://snowball.tartarus.org/

Original Snowball product is created by Dr Martin Porter and  Richard Boulton (Java porting) under
BSD license.

Using the library
-----------------

You can use each stemming modules from JSX program.

.. code-block:: java

   import "english-stemmer.jsx";

   class _Main
   {
       function constructor (argv string[]) : void
       {
           var stemmer = new EnglishStemmer();
           log stemmer.stem("We are the world", 10);
       }
   }

If you want to use this module from JavaScript, convert your needed module into JavaScript.

.. code-block:: bash

   $ jsx --executable web --output stemmer.js german-stemmer.jsx

.. code-block:: html

   <html>
   <script type="text/javascript" src="stemmer.jsx.js"></script>
   <script type="text/javascript">
   window.onload = function() {
       var Stemmer require("german-stemmer.jsx").GermanStemmer$;
       var stemmer = new Stemmer();
       var result = stemmer.stem$SI("We are the world", 10);
   };
   </script>
   </html>


The TestApp example
-------------------

The :file:`testapp.jsx` example program allows you to run any of the stemmers
on a sample vocabulary.

Usage::

   testapp.jsx <algorithm> "sentences ... "

.. code-block:: bash

   $ jsx --add-search-path ./lib ./bin/testapp.jsx English

License
-------

It is a BSD licensed library.

-----------------------------

Copyright (c) 2013, Yoshiki Shibukawa

All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided
that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this list of conditions and
  the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions
  and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS
BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR
BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

