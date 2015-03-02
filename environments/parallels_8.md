Parallels Notes
===============

Parallels 7
-----------
We did not find a way to successfully use the Kali and Metasploitable images
with Parallels 7.

Parallels 8
-----------
This version can convert the VMWare virtual machine images and run them
successfully. After downloading and unpacking a VM, add it to Parallels by
going to File -> Open and choosing the .vmx file. Answer affirmatively to
a "needs to be converted" prompt and, after a while, Parallels will produce
a converted version of the virtual machine.

Check the network settings. Metasploitable gets two network adapters: one
shared and one local-only. The shared adapter can be disabled for better 
security. Do not use "Bridged" option for Metasploitable.