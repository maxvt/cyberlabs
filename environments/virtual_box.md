VirtualBox notes
================
With a copy of VMWare Workstation, it is very easy to convert the official
VMWare images of Metasploitable2 and Kali Linux to the OVF format accepted
by VirtualBox:

```
C:\Program Files (x86)\VMware\VMware Workstation\OVFTool>ovftool.exe 
C:\521vm\Metasploitable2-Linux\Metasploitable.vmx C:\521vm\Metasploitable2.ovf
Opening VMX source: C:\521vm\Metasploitable2-Linux\Metasploitable.vmx
Opening OVF target: C:\521vm\Metasploitable2.ovf
Writing OVF package: C:\521vm\Metasploitable2.ovf
Transfer Completed
Completed successfully 
```

After conversion, please go into the image settings and make sure 
the networking is set the way you need (we recommend "VirtualBox Host-Only"
for maximum isolation) on both images.

![Screenshot of VirtualBox UI showing both virtual machines and network
adapter properties](virtualbox-network.png)

We have produced a 7z archive of Metasploitable (~900 MB) and Kali (~1.1 GB)
post conversion. If there is a demand, we can look for a way to make it
available for download. 

If you have a method of conversion that does not require VMWare, please
contribute it to the discussion!
