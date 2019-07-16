# What does the MultispeQ Measure?

The standard MultispeQ protocol measures the following parameters*:

## Primary Parameters

| Parameter | What does it mean? |
| --------- | ------------------ |
|Ambient Humidity|Relative humidity in percent (%)|
|Ambient Pressure|Atmospheric pressure (mbar) - This value is not corrected to sea level as found in weather reports|
|Ambient Temperature|Ambient temperature in degree Celsius (°C)|
|ECSt mAU|Total magnitude of ECS (electrochromic shift) decay during a light-dark transition (DIRK measurement) expressed in milli-absorbance unit. *[Sacksteder et al. Proc. Nat. Acad. Sci. (2000)][doi:10.1073/pnas.97.26.14283], [Kramer et al. Photosynthesis Res. (1999)][doi.org/10.1023/A:1006212014787]*|
|gH+|  Proton conductivity of the chloroplast ATP synthase. *[Kanazawa and Kramer, Proc. Nat. Acad. Sci. (2002)][doi:10.1073/pnas.182427499]*|
|Leaf Angle|The angle of the leaf, from 0 - 90 degrees|
|Leaf Temperature Differential|  **Leaf Temperature** ( or **contactless_temp**) minus **Ambient Temperature**, negative numbers mean that the leaf is cooler than the surrounding air and vice versa.
|LEF|Linear Electron Flow. The total flow of electrons from antennae complexes (where light is captured) into Photosystem II, taking the leaf absorptivity into account. Calculated as LEF = Phi2 x PAR x 0.45|
|Light Intensity (PAR)|Photosynthetically active radiation. Fraction of the incoming light (400 nm to 700 nm) which can be utilized to drive photosynthesis; µmol photons * s⁻¹ * m⁻²|
|NPQt | Estimate of non-photochemical quenching. The amount of incoming light that is regulated away from photosynthetic processes in order to reduce damage to the plant.|
|Phi2 |Quantum yield of Photosystem II. This measurement is essentially the percentage of incoming light (excited electrons) that go into Photosystem II. Photosystem II is where most light energy is converted into food.|
|PhiNO|Ratio of incoming light that is lost via non-regulated processes. PhiNO is the combination of a number of unregulated processes whose by-products can inhibit photosynthesis or be harmful to the plant. *[Kuhlgert et al. Royal Soc Open Sci. (2016)][doi:10.1098/rsos.160592]*||
|PhiNPQ|Ratio of incoming light that goes towards non-photochemical quenching. The plant regulating excess energy in such a way as too reduce damage to the plant. *[Kuhlgert et al. Royal Soc Open Sci. (2016)][doi:10.1098/rsos.160592]*|
|PS1 Active Centers|Active Photosystem I that is operational to receive/pass electrons. *[Kanazawa et al. Front. Plant Sci. (2017)][doi.org/10.3389/fpls.2017.00719]*]
|PS1 Open Centers|Photosystem I that is ready to accept electrons. *[Kanazawa et al. Front. Plant Sci. (2017)][doi.org/10.3389/fpls.2017.00719]*|
|PS1 Over Reduced Centers|All the acceptor side of Photosystem I are occupied by electrons and cannot accept any more electrons. *[Kanazawa et al. Front. Plant Sci. (2017)][doi.org/10.3389/fpls.2017.00719]*|
|PS1 Oxidized Centers|One or all of the acceptors of Photosystem I have no electron(s). *[Kanazawa et al. Front. Plant Sci. (2017)][doi.org/10.3389/fpls.2017.00719]*|
|Relative Chlorophyll|Otherwise known has "SPAD" (Special Products Analysis Division), relative chlorophyll is a measure of leaf “greenness”. This measurement is often correlated with leaf nitrogen levels|
|Thickness| The thickness of the leaf as measured by the Hall Effect sensor embedded in the MultispeQ clamp.
|vH+| Steady-state rate of proton flux through the chloroplast ATP synthase. *[Avenson et al. Plant Cell Environ. (2005)][doi:10.1111/j.1365-3040.2005.01294.x]*|

## Advanced

| Parameter | What does it mean? |
| --------- | ------------------ |
|absorbance_wavelength|The absorbance of light from each wavelength that passed through the leaf|
|angle_direction|Abbreviated cardinal direction (e.g. NW - North West)|
|B|The raw amount of blue light captured by the PAR sensor|
|compass|Cardinal direction in degrees from North|
|compass_direction|Abbreviated cardinal direction (e.g. NW - North West)|
|contactless_temp|Surface temperature in degree Celsius (°C)|
|ECS_tau|The rate of ECS. This indicates the lifetime of steady-state proton translocation through the chloroplast ATP synthase. *[Sacksteder et al. Proc. Nat. Acad. Sci. (2000)][doi:10.1073/pnas.97.26.14283], [Kramer et al. Photosynthesis Res. (1999)][doi.org/10.1023/A:1006212014787]*|
|FmPrime|Maximum variable fluorescence at steady-state conditions|
|FoPrime|Minimum variable fluorescence during dark phase after steady-state|
|Fs|Variable fluorescence at steady-state conditions|
|G|The raw amount of green light captured by the PAR sensor|
|kP700|The rate constant of P700 electron transfer. P700 is the primary electron acceptor of PS1.|
|P700_DIRK_ampl|The amplitude of the P700 electron transfer in light-dark transition (DIRK measurement). It indicates the condition of PS1 electron transfer. *[Kanazawa et al. Front. Plant Sci. (2017)][doi.org/10.3389/fpls.2017.00719]*|
|pitch|Pitch is the angle the Instrument is held along the short axis|
|qL|Fraction of Photosystem II centers which are in the open state|
|R|The raw amount of red light captured by the PAR sensor|
|roll|Roll is the angle the Instrument is held along the long axis|
|tP700|"Tau" P700: the lifetime of P700 electron transfer. P700 is the primary electron acceptor of PS1.|
|V_initial_P700|The initial rate of P700 steady-state electron transfer.

::: danger
\*Some of the parameters are not available for the beta version of the MultispeQ
:::

***

#### Check out this Talk of what the MultispeQ measures by Dr. Kramer

<iframe width="560" height="315" src="https://www.youtube.com/embed/pU5vOtE1wE8" frameborder="0" allowfullscreen></iframe>

***

#### Where can I find more information?

You can search <https://pubmed.com> or <https://scholar.google.com> if you are looking for scientific literature. Below you find a small selection of literature that will get you started:

Tietz, S., Hall, C. C., Cruz, J. A., Kramer, D. M. (2017) **NPQ<sub>(T)</sub>: a chlorophyll fluorescence parameter for rapid estimation and imaging of non-photochemical quenching of excitons in photosystem-II-associated antenna complexes** *Plant. Cell Environ.* 40(8), 1243–1255. [doi:10.1111/pce.12924].

Kanazawa, A., Ostendorf, E., Kohzuma, K., Hoh, D., Strand, D. D., Sato-Cruz, M., Savage, L., Cruz, J. A., Fisher, N., Froehlich, J. E., Kramer, D. K. (2017). **Chloroplast ATP Synthase Modulation of the Thylakoid Proton Motive Force: Implications for Photosystem I and Photosystem II Photoprotection.** *Front. Plant Sci.* 8:1-12. [doi.org/10.3389/fpls.2017.00719].

Kuhlgert, S., Austic, G., Zegarac, R. Osei-Bonsu, I.,Hoh, D., Chilvers, M. I., et al. (2016). **MultispeQ Beta: a tool for large-scale plant phenotyping connected to the open PhotosynQ network.** *R. Soc. Open Sci.* 3, 160592. [doi:10.1098/rsos.160592].

Cruz, J. A., Savage, L. J., Zegarac, R., Hall, C. C., Satoh-Cruz, M., Davis, G. A., et al. (2016). **Dynamic Environmental Photosynthetic Imaging Reveals Emergent Phenotypes.** *Cell Syst.* 2, 365–377. [doi:10.1016/j.cels.2016.06.001].

Kramer, D. M., and Evans, J. R. (2011). **The importance of energy balance in improving photosynthetic productivity.** *Plant Physiol.* 155, 70–8. [doi:10.1104/pp.110.166652].

Baker, N. R. (2008). **Chlorophyll fluorescence: a probe of photosynthesis in vivo.** *Annu. Rev. Plant Biol.* 59, 89–113. [doi:10.1146/annurev.arplant.59.032607.092759].

Avenson, T. J., Kanazawa, A., Cruz, J. A., Takizawa, K., Ettinger, W.E., Kramer, D. K. (2005). **Integrating the proton circuit into photosynthesis: progress and challenges.** *Plant Cell Environ.* 28: 97-109. [doi:10.1111/j.1365-3040.2005.01294.x].

Kramer, D. M., Cruz, J. A., and Kanazawa, A. (2003). **Balancing the central roles of the thylakoid proton gradient.** *Trends Plant Sci.* 8, 27–32. [doi:10.1016/S1360-1385(02)00010-9]

Kanazawa, A., Kramer, D. K. (2002). ***In vivo* modulation of nonphotochemical exciton quenching (NPQ) by regulation of the chloroplast ATP synthase.** *Proc. Nat. Acad. Sci.* 99: 12789-12794. [doi:10.1073/pnas.182427499]

Sacksteder, C. A., Kanazawa, A., Jacoby, M. E., Kramer, D. M. (2000). **The proton to electron stoichiometry of steady-state photosynthesis in living plants: A proton-pumping Q cycle is continuously engaged.** *Proc. Nat. Acad. Sci.* 97, 14283-14288. [doi:10.1073/pnas.97.26.14283]

Kramer, D. M., Sacksteder, C. A., Cruz, J. A. (1999). **How acidic is the lumen?** *Photosynthesis Res.* 60: 151-163 [doi.org/10.1023/A:1006212014787]

[doi:10.1111/pce.12924]: https://doi.org/10.1111/pce.12924

[doi.org/10.3389/fpls.2017.00719]: https://doi.org/10.3389/fpls.2017.00719

[doi:10.1098/rsos.160592]: https://doi.org/10.1098/rsos.160592

[doi:10.1016/j.cels.2016.06.001]: https://doi.org/10.1016/j.cels.2016.06.001

[doi:10.1104/pp.110.166652]: https://doi.org/10.1104/pp.110.166652

[doi:10.1146/annurev.arplant.59.032607.092759]: https://doi.org/10.1146/annurev.arplant.59.032607.092759

[doi:10.1016/S1360-1385(02)00010-9]: https://doi.org/10.1016/S1360-1385(02)00010-9

[doi:10.1073/pnas.97.26.14283]: https://doi.org/10.1073/pnas.97.26.14283

[doi.org/10.1023/A:1006212014787]: https://doi.org/10.1023/A:1006212014787

[doi:10.1111/j.1365-3040.2005.01294.x]: https://doi.org/10.1111/j.1365-3040.2005.01294.x

[doi:10.1073/pnas.182427499]: https://doi.org/10.1073/pnas.182427499
