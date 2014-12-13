\h3{Distributed Internet}
\cite{2014.12}

The Internet at the end of 2014, now, is not so different with the the Internet 10 years ago.
It's infrastructure is probablly 20+ year's old and little improvement has been made all along these years.
But the users of Internet has exploded, partially due to the broadband Internet access and the prevailing mobile Internet accessible devices.
The traditional infrastructure need evolution to meet people's future demands.

One noticing endeavour is focused on the shortage of IP address pool.
While NAT is widely adopted as an painkiller for IPv4 problem, IPv6, the so-believed cure is however never widely adopted.
The overall coverage of IPV6 capbility network is 18.4% globally with an anually increasing rate of 0.2% only.
The incompatibilty of IPV6 and IPV4 networking is a multiple layer problem, and DNS as a layer of that problem might be the most annoying.
On a IPv6 available network, there's need of separate library call to resovle a domain name of IPV6 from that of IPV4.
From other point of view, a web service needs a separate domain name for IPV6 network, which is technically irrelevant to it's IPV4 domain name.

One of the weekness of current Internet infrastructure is that most part of the net is in a hierachical topology.
This kind of topology might be one of the cheapest way to connect all nodes of the net and has been optimized for localized data transfer.
Twenty or more years ago, that might be true, since Internet is in such a small scale and the bandwidth is so small comparing to what we have now.
In the past twenty years, the asymmericity of information distribution is getting bigger as ADSL is the main aceess for most of the Internet user.
Server/client mode's success shows that our net is mostly a producer/consumer mode.
Most clients simply consumes information for those producers, so the bit just from those producer to the client.
And now more and more produced information is uploaded to the Internet, but rather than directly to the consumers, those upload information goes to the hosting service providers'.
The hosting service providers than use there network resources, such as CDN to distributes these information to the consumers.
Due to innate disadvantage of the hierachical topology, CDN is quite expensive to reach further enough for each end of the node.
That is how the information gap is formed and escalates when the Internet is now international and inter-ISP as well.

We here in China have two main ISP and reaching from one to another is just like reaching for the net of another country.
The China Telecom has the largest bandwidth to USA, however the quality is so low that about 30% packet is lost along the way on normal condition and 70% or more packet loss at night.
But the China Unicom has better quality than that of China Telecom, though the overall bandwidth is said to be much smaller.
It is so weired that we can't reach to USA with China Telecom's service while finally use the China Unicom's oversea fiber.
The next hop in each router along the way is pointing to ISP's own nodes, possiblly manually, to form the so long proved most cost-efficient hierachical topology.

One solution is to use a totally different topology, such as the never popluar P2P way.
B.A.T.M.A.N. protocol based mobile network has been tested in a over 300 node wireless/wired combined environment by German Freifunk communities (\link+[The Hamburg Freifunik]{http://hamburg.freifunk.net/}).
And recently BitTorrent announce \link+[Project Maelstrom]{http://blog.bittorrent.com/2014/12/10/project-maelstrom-the-internet-we-build-next/} that aim to try to replace the current hosting service providers' network, without the change of physical toplogy of the network.
There were once a software installed in many Chinese people's PC named Qvod, which try to use it's P2P way to deliver video content to users without dedicated CDN.
But the company developing it is now under investigation as most video go through Qvod is porn, and there are competing traditional CDN based companies want its P2P technology based market.

It is not hard to imagine that if we have a P2P network of some scale will definitly be filled with porn.
Without single point weakness also losses single point control, and that is not good for any power-hanger government.
And there are countries such as USA spying over net user's informations, whether personal or public, and countries blocking Internet to other countries in the name of Internet Sovereignty.
The P2P networking with encryption is a way to go beyond spying and blocking.


