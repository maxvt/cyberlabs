A Simple Laboratory Environment for Real-World Offensive Security Education
===========================================================================
This repository complements the paper to be published at SIGCSE 2015.

Labs
----
A subset of lab assignments is available under the labs/ folder. 
Some assignments (for example, the ethics lab) are excluded because they 
need significant customization to the rules of the country / university 
where they are given, or may require further updates. Please contact
the authors if you would like to access the entire set.

To build the PDF files, go into labs/ folder and invoke "make". The 
rendering process requires [Prince](http://www.princexml.com/) to be installed.

If you are going to use the labs in your class:
- The labs are provided on an "as-is" basis, no support commitment is
  expressed or implied. We welcome patches, though.
- Please cite the paper if you use the labs (see format below).

Editing the labs
----------------
The following tools might be useful to contribute to the labs' sources:
* dia files - [Dia](https://wiki.gnome.org/Apps/Dia/)

All the sources are rendered into files usable by Prince, which means
.svg for vector files and .png for raster files.

Solutions
---------
This public repository does not include lab solutions. Please contact
the authors if you wish to obtain the reference solutions. Note
that the build system always generates both lab and solution files, even
when the sources do not include any solution-related markup.

Paper
-----
The sources of the paper are provided here to allow for easy integration of
corrections and future updates. A rendered PDF version is intentionally not
provided--please use the official version at (TODO ACM link) or compile the
latest version from source. You will need a recent installation of LaTeX
(including biber and other referenced packages) to compile the paper.

Citations
---------
TODO tex markup and plain markup
