let l,m,t,attr,v;
l = document.getElementById("len");
m = document.getElementById("mass");
t = document.getElementById("time");
v = document.getElementById("volume");
temp = document.getElementById("temprature");
sp = document.getElementById("speed");
ar = document.getElementById("area");
cu = document.getElementById("current");
freq = document.getElementById("freq");
ang = document.getElementById("angle");
volt = document.getElementById("voltage");
res = document.getElementById("ohm");
fo = document.getElementById("force");
pr = document.getElementById("pressure");

document.getElementById("fun_units").addEventListener('change',function(){
    
    if(l.hasAttribute("class") == false){
        l.setAttribute("class","options");
    }
    if(m.hasAttribute("class") == false){
        m.setAttribute("class","options");
    }
    if(t.hasAttribute("class") == false){
        t.setAttribute("class","options");
    }
    if(v.hasAttribute("class") == false){
        v.setAttribute("class","options");
    }
    if(temp.hasAttribute("class") == false){
        temp.setAttribute("class","options");
    }
    if(sp.hasAttribute("class") == false){
        sp.setAttribute("class","options");
    }
    if(ar.hasAttribute("class") == false){
        ar.setAttribute("class","options");
    }
    if(cu.hasAttribute("class") == false){
        cu.setAttribute("class","options");
    }
    if(freq.hasAttribute("class") == false){
        freq.setAttribute("class","options");
    }
    if(ang.hasAttribute("class") == false){
        ang.setAttribute("class","options");
    }
    if(volt.hasAttribute("class") == false){
        volt.setAttribute("class","options");
    }
    if(res.hasAttribute("class") == false){
        res.setAttribute("class","options");
    }
    if(fo.hasAttribute("class") == false){
        fo.setAttribute("class","options");
    }
    if(pr.hasAttribute("class") == false){
        pr.setAttribute("class","options");
    }
    


const selected_unit = document.getElementById("fun_units").value;
    switch(selected_unit){
        case "length": l.removeAttribute("class");
        break;

        case "mass":  m.removeAttribute("class");
        break;

        case "time": t.removeAttribute("class");
        break;
        
        case "volume": v.removeAttribute("class");
        break;

        case "temprature": temp.removeAttribute("class");
        break;

        case "speed": sp.removeAttribute("class");
        break;

        case "area": ar.removeAttribute("class");
        break;

        case "current": cu.removeAttribute("class");
        break;

        case "frequency": freq.removeAttribute("class");
        break;

        case "angle": ang.removeAttribute("class");
        break;

        case "voltage": volt.removeAttribute("class");
        break;

        case "resistance": res.removeAttribute("class");
        break;

        case "force": fo.removeAttribute("class");
        break;

        case "pressure": pr.removeAttribute("class");
        break;

    }
});

function length(){
    let rfrommeter=0;
    let rtometer=0;
    let inputvalue = document.getElementById("in_value").value;
    let unitfrom = document.getElementById("lin_unit").value;
    let unitto = document.getElementById("lout_unit").value;

    if(unitfrom==unitto){
        rfrommeter = inputvalue;
    }
    else{

    switch (unitfrom){
        case "kilometer":
            rtometer = inputvalue*1000;
            break;
        case "meter":
            rtometer = inputvalue;
            break;
        case "decimeter":
            rtometer = inputvalue/10;
            break;
        case "centimeter":
            rtometer = inputvalue/100;
            break;
        case "millimeter":
            rtometer = inputvalue/1000;
            break;
        case "nanometer":
            rtometer = inputvalue/100000000;
            break;
        case "micrometer":
            rtometer = inputvalue/1000000;
            break;
        case "picometer":
            rtometer = inputvalue/10000000000;
            break;
        case "mile":
            rtometer = inputvalue*1609.344;
            break;
        case "foot":
            rtometer = inputvalue*0.3048;
            break;
        case "inch":
            rtometer = inputvalue*0.0254;
            break;
        default:
            rtometer = "Invalid unit";
    }


    switch (unitto){
        case "kilometer":
            rfrommeter = rtometer/1000;
            break;
        case "meter":
            rfrommeter = rtometer;
            break;
        case "decimeter":
            rfrommeter = rtometer*10;
            break;
        case "centimeter":
            rfrommeter = rtometer*100;
            break;
        case "millimeter":
            rfrommeter = rtometer*1000;
            break;
        case "nanometer":
            rfrommeter = rtometer*100000000;
            break;
        case "micrometer":
            rfrommeter = rtometer*1000000;
            break;
        case "picometer":
            rfrommeter = rtometer*10000000000;
            break;
        case "mile":
            rfrommeter = rtometer/1609.344;
            break;
        case "foot":
            rfrommeter = rtometer/0.3048;
            break;
        case "inch":
            rfrommeter = rtometer/0.0254;
            break;
        default:
            rfrommeter = "Invalid unit";
    }
}

    document.getElementById("output").innerHTML = rfrommeter;
    // document.getElementById("in_value").addEventListener('input',function(){
    //     document.getElementById("output").innerHTML = rfrommeter;
    // })


};

//for MASS

function mass(){
    let rfromgram=0;
    let rtogram=0;
    let inputvalue = document.getElementById("in_value").value;
    let unitfrom = document.getElementById("in_unit").value;
    let unitto = document.getElementById("out_unit").value;

    if(unitfrom==unitto){
        rfromgram = inputvalue;
    }
    else{

    switch (unitfrom){
        case "kilogram":
            rtogram = inputvalue*1000;
            break;
        case "gram":
            rtogram = inputvalue;
            break;
        case "milligram":
            rtogram = inputvalue/1000;
            break;
        case "microgram":
            rtogram = inputvalue/1000000;
            break;
        case "quintal":
            rtogram = inputvalue*100000;
            break;
        case "pound":
            rtogram = inputvalue*453.59237;
            break;
        case "ounce":
            rtogram = inputvalue*28.34952;
            break;
        case "carat":
            rtogram = inputvalue*0.2;
            break;
        case "tonne":
            rtogram = inputvalue*1000000;
            break;
        default:
            rtogram = "Invalid unit";
    }



    switch (unitto){
        case "kilogram":
            rfromgram = rtogram/1000;
            break;
        case "gram":
            rfromgram = rtogram;
            break;
        case "milligram":
            rfromgram = rtogram*1000;
            break;
        case "microgram":
            rfromgram = rtogram*1000000;
            break;
        case "quintal":
            rfromgram = rtogram/100000;
            break;
        case "pound":
            rfromgram = rtogram/453.59237;
            break;
        case "ounce":
            rfromgram = rtogram/28.34952;
            break;
        case "carat":
            rfromgram = rtogram/0.2;
            break;
        case "tonne":
            rfromgram = rtogram/1000000;
            break;
        default:
            rfromgram = "Invalid unit";
    }
}
    document.getElementById("output").innerHTML = rfromgram;
};

//for time

function time(){
    let inputvalue = document.getElementById("in_value").value;
    let unitfrom = document.getElementById("tin_unit").value;
    let unitto = document.getElementById("tout_unit").value;
    let rtosec=0;
    let rfromsec=0;

    if(unitfrom==unitto){
        rfromsec= inputvalue;
    }
    else{

        switch(unitfrom){
            case "year":
                rtosec = 31536000*inputvalue;
                break;
            case "week":
                rtosec = 604800*inputvalue;
                break;
            case "day":
                rtosec = 86400*inputvalue;
                break;
            case "hour":
                rtosec = 3600*inputvalue;
                break;
            case "minute":
                rtosec = 60*inputvalue;
                break;
            case "second":
                rtosec = 1*inputvalue;
                break;
            case "millisecond":
                rtosec = inputvalue/1000;
                break;
            case "microsecond":
                rtosec = inputvalue/1000000;
                break;
            case "picosecond":
                rtosec = inputvalue/1000000000000;
                break; 
        }

        switch(unitto){
            case "year":
                rfromsec = rtosec/31556952;
                break;
            case "week":
                rfromsec = rtosec/604800;
                break;
            case "day":
                rfromsec = rtosec/86400;
                break;
            case "hour":
                rfromsec = rtosec/3600;
                break;
            case "minute":
                rfromsec = rtosec/60;
                break;
            case "second":
                rfromsec = rtosec;
                break;
            case "millisecond":
                rfromsec = rtosec*1000;
                break;
            case "microsecond":
                rfromsec = rtosec*1000000;
                break;
            case "picosecond":
                rfromsec = rtosec*1000000000000;
                break; 
        }
    }
    document.getElementById("output").innerHTML = rfromsec;


}




//for VOLUME

function volume(){
    let inputvalue = document.getElementById("in_value").value;
    let unitfrom = document.getElementById("vin_unit").value;
    let unitto = document.getElementById("vout_unit").value;
    let rfromliter=0;
    let rtoliter=0;

    if(unitfrom==unitto){
        rfromliter = inputvalue;
    }
    else{

    switch (unitfrom){
        case "cubic-m":
            rtoliter = inputvalue*1000;
            break;
        case "cubic-dm":
            rtoliter = inputvalue;
            break;
        case "cubic-cm":
            rtoliter = inputvalue/1000;
            break;
        case "cubic-mm":
            rtoliter = inputvalue/1000000;
            break;
        case "hectoliter":
            rtoliter = inputvalue/100;
            break;
        case "liter":
            rtoliter = inputvalue;
            break;
        case "deciliter":
            rtoliter = inputvalue/10;
            break;
        case "centiliter":
            rtoliter = inputvalue/100;
            break;
        case "milliliter":
            rtoliter = inputvalue/1000;
            break;
        case "cubic-foot":
            rtoliter = inputvalue*28.3168466;
            break;
        case "cubic-inch":
            rtoliter = inputvalue*0.016387064;
            break;
        case "cubic-yard":
            rtoliter = inputvalue*764.554858;
            break;
        case "acre-foot":
            rtoliter = inputvalue*1234000;
            break;
        default:
            rtoliter = "Invalid unit";
    }



    switch (unitto){
        case "cubic-m":
            rfromliter = rtoliter/1000;
            break;
        case "cubic-dm":
            rfromliter = rtoliter;
            break;
        case "cubic-cm":
            rfromliter = rtoliter*1000;
            break;
        case "cubic-mm":
            rfromliter = rtoliter*1000000;
            break;
        case "hectoliter":
            rfromliter = rtoliter*100;
            break;
        case "liter":
            rfromliter = rtoliter;
            break;
        case "deciliter":
            rfromliter = rtoliter*10;
            break;
        case "centiliter":
            rfromliter = rtoliter*100;
            break;
        case "milliliter":
            rfromliter = rtoliter*1000;
            break;
        case "cubic-foot":
            rfromliter = rtoliter/28.3168466;
            break;
        case "cubic-inch":
            rfromliter = rtoliter/0.016387064;
            break;
        case "cubic-yard":
            rfromliter = rtoliter/764.554858;
            break;
        case "acre-foot":
            rfromliter = rtoliter/1234000;
            break;
        default:
            rfromliter = "Invalid unit";
    }
}
    document.getElementById("output").innerHTML = rfromliter;
}


//for temprature

function temprature(){
    let inputvalue = document.getElementById("in_value").value;
    let unitfrom = document.getElementById("tempin_unit").value;
    let unitto = document.getElementById("tempout_unit").value;
    let rfromkelvin = 0;

    if(unitfrom == unitto){
        rfromkelvin = inputvalue;
    }
    else{

        if(unitfrom == "celsius" && unitto == "f"){
            rfromkelvin = inputvalue*(9/5) + 32;
            document.getElementById("output").innerHTML = rfromkelvin;
        }
        if(unitfrom == "celsius" && unitto == "kelvin"){
            rfromkelvin = inputvalue + 273.15;
            document.getElementById("output").innerHTML = rfromkelvin;
        }
        if(unitfrom == "f" && unitto == "celsius"){
            rfromkelvin = (inputvalue - 32) * 5/9;
            document.getElementById("output").innerHTML = rfromkelvin;
        }
        if(unitfrom == "f" && unitto == "kelvin"){
            rfromkelvin = (inputvalue - 32) * (5/9) + 273.15;
            document.getElementById("output").innerHTML = rfromkelvin; 
        }
        if(unitfrom == "kelvin" && unitto=="celsius"){
            rfromkelvin = inputvalue - 273.15;
            document.getElementById("output").innerHTML = rfromkelvin;
        }
        if(unitfrom == "kelvin" && unitto=="f"){
            rfromkelvin = (inputvalue - 273.15) * (9/5) +32;
            document.getElementById("output").innerHTML = rfromkelvin;
        }

    }

}


//for speed

function speed(){
    let inputvalue = document.getElementById("in_value").value;
    let unitfrom = document.getElementById("speedin_unit").value;
    let unitto = document.getElementById("speedout_unit").value;
    let rtometerpsec = 0;
    let rfrommeterpsec = 0;

    if(unitfrom==unitto){
        rfrommeterpsec = inputvalue;
    }
    else{
        
        switch(unitfrom){
            case "milephour":
                rtometerpsec = inputvalue/2.23693629;
                break;
            case "kmphour":
                rtometerpsec = inputvalue/3.6;
                break;
            case "footpsec":
                rtometerpsec = inputvalue/3.2808399;
                break;
            case "meterpsec":
                rtometerpsec = inputvalue*1;
                break;
            case "knot":
                rtometerpsec = inputvalue/1.94384449;
                break;
            case "mach":
                rtometerpsec = inputvalue*343;
                break;
        }

        switch(unitto){
            case "milephour":
                rfrommeterpsec = rtometerpsec/2.23693629;
                break;
            case "kmphour":
                rfrommeterpsec = rtometerpsec/3.6;
                break;
            case "footpsec":
                rfrommeterpsec = rtometerpsec/3.2808399;
                break;
            case "meterpsec":
                rfrommeterpsec = rtometerpsec*1;
                break;
            case "knot":
                rfrommeterpsec = rtometerpsec/1.94384449;
                break;
            case "mach":
                rfrommeterpsec = rtometerpsec*343;
                break;
        }
    }
        document.getElementById("output").innerHTML = rfrommeterpsec;
}

//for area

function area(){
    let inputvalue = document.getElementById("in_value").value;
    let unitfrom = document.getElementById("areain_unit").value;
    let unitto = document.getElementById("areaout_unit").value;
    let rtosqm = 0;
    let rfromsqm = 0;

    if(unitfrom==unitto){
        rfromsqm = inputvalue;
    }
    else{
        
        switch(unitfrom){
            case "sqkm":
                rtosqm = inputvalue*1000000;
                break;
            case "hectare":
                rtosqm = inputvalue*10000;
                break;
            case "are":
                rtosqm = inputvalue*100;
                break;
            case "sqm":
                rtosqm = inputvalue*1;
                break;
            case "sqdm":
                rtosqm = inputvalue/100;
                break;
            case "sqcm":
                rtosqm = inputvalue/10000;
                break;
            case "sqmm":
                rtosqm = inputvalue/1000000;
                break;
            case "sqmile":
                rtosqm = inputvalue*2589988.11;
                break;
            case "acre":
                rtosqm = inputvalue*4046.85642;
                break;
            case "sqyard":
                rtosqm = inputvalue/1.1959;
                break;
            case "sqfoot":
                rtosqm = inputvalue/10.76391;
                break;
            case "sqinch":
                rtosqm = inputvalue/1550.0031;
                break;
            
            
        }

        switch(unitto){
            case "sqkm":
                rfromsqm = rtosqm/1000000;
                break;
            case "hectare":
                rfromsqm = rtosqm/10000;
                break;
            case "are":
                rfromsqm = rtosqm/100;
                break;
            case "sqm":
                rfromsqm = rtosqm*1;
                break;
            case "sqdm":
                rfromsqm = rtosqm*100;
                break;
            case "sqcm":
                rfromsqm = rtosqm*10000;
                break;
            case "sqmm":
                rfromsqm = rtosqm*1000000;
                break;
            case "sqmile":
                rfromsqm = rtosqm/2589988.11;
                break;
            case "acre":
                rfromsqm = rtosqm/4046.85642;
                break;
            case "sqyard":
                rfromsqm = rtosqm*1.1959;
                break;
            case "sqfoot":
                rfromsqm = rtosqm*10.76391;
                break;
            case "sqinch":
                rfromsqm = rtosqm*1550.0031;
                break;
            
            
        }
    }
        document.getElementById("output").innerHTML = rfromsqm;
}

//for current

function current(){
    let inputvalue = document.getElementById("in_value").value;
    let unitfrom = document.getElementById("currentin_unit").value;
    let unitto = document.getElementById("currentout_unit").value;
    let rtocurrent = 0;
    let rfromcurrent = 0;

    if(unitfrom==unitto){
        rfromcurrent = inputvalue;
    }
    else{
        
        switch(unitfrom){
            case "microampere":
                rtocurrent = inputvalue/1000000;
                break;
            case "milliampere":
                rtocurrent = inputvalue/1000;
                break;
            case "ampere":
                rtocurrent = inputvalue*1;
                break;
            case "kiloampere":
                rtocurrent = inputvalue*1000;
                break;
            case "megaampere":
                rtocurrent = inputvalue*1000000;
                break;
            case "gigaampere":
                rtocurrent = inputvalue*1000000000;
                break;
            case "teraampere":
                rtocurrent = inputvalue*1000000000000;
                break;
            case "petaampere":
                rtocurrent = inputvalue*1000000000000000;
                break;
            case "exaampere":
                rtocurrent = inputvalue*1000000000000000000n;
                break;
        }

        switch(unitto){
            case "microampere":
                rfromcurrent = rtocurrent/1000000;
                break;
            case "milliampere":
                rfromcurrent = rtocurrent/1000;
                break;
            case "ampere":
                rfromcurrent = rtocurrent*1;
                break;
            case "kiloampere":
                rfromcurrent = rtocurrent*1000;
                break;
            case "megaampere":
                rfromcurrent = rtocurrent*1000000;
                break;
            case "gigaampere":
                rfromcurrent = rtocurrent*1000000000;
                break;
            case "teraampere":
                rfromcurrent = rtocurrent*1000000000000;
                break;
            case "petaampere":
                rfromcurrent = rtocurrent*1000000000000000;
                break;
            case "exaampere":
                rfromcurrent = rtocurrent*1000000000000000000n;
                break;
        }
    }
        document.getElementById("output").innerHTML = rfromcurrent;
}


// for frequency

function frequency(){
    let inputvalue = document.getElementById("in_value").value;
    let unitfrom = document.getElementById("freqin_unit").value;
    let unitto = document.getElementById("freqout_unit").value;
    let rtohertz = 0;
    let rfromhertz = 0;

    if(unitfrom==unitto){
        rfromhertz = inputvalue;
    }
    else{
        
        switch(unitfrom){
            case "microhertz":
                rtohertz = inputvalue/1000000;
                break;
            case "millihertz":
                rtohertz = inputvalue/1000;
                break;
            case "hertz":
                rtohertz = inputvalue*1;
                break;
            case "kilohertz":
                rtohertz = inputvalue*1000;
                break;
            case "megahertz":
                rtohertz = inputvalue*1000000;
                break;
            case "gigahertz":
                rtohertz = inputvalue*1000000000;
                break;
            case "terahertz":
                rtohertz = inputvalue*1000000000000;
                break;
            case "petahertz":
                rtohertz = inputvalue*1000000000000000;
                break;
            case "exahertz":
                rtohertz = inputvalue*1000000000000000000n;
                break;
        }

        switch(unitto){
            case "microhertz":
                rfromhertz = rtohertz/1000000;
                break;
            case "millihertz":
                rfromhertz = rtohertz/1000;
                break;
            case "hertz":
                rfromhertz = rtohertz*1;
                break;
            case "kilohertz":
                rfromhertz = rtohertz*1000;
                break;
            case "megahertz":
                rfromhertz = rtohertz*1000000;
                break;
            case "gigahertz":
                rfromhertz = rtohertz*1000000000;
                break;
            case "terahertz":
                rfromhertz = rtohertz*1000000000000;
                break;
            case "petahertz":
                rfromhertz = rtohertz*1000000000000000;
                break;
            case "exahertz":
                rfromhertz = rtohertz*1000000000000000000n;
                break;
        }
    }
        document.getElementById("output").innerHTML = rfromhertz;
}

//for angle

function angle(){
    let inputvalue = document.getElementById("in_value").value;
    let unitfrom = document.getElementById("anglein_unit").value;
    let unitto = document.getElementById("angleout_unit").value;
    let rtoradian = 0;
    let rfromradian = 0;

    if(unitfrom==unitto){
        rfromradian = inputvalue;
    }
    else{
        
        switch(unitfrom){
            case "degree":
                rtoradian = inputvalue/57.29577;
                break;
            case "radian":
                rtoradian = inputvalue*1;
                break;
            case "milliradian":
                rtoradian = inputvalue/1000;
                break;
            case "microradian":
                rtoradian = inputvalue/1000000;
                break;
            case "gradian":
                rtoradian = inputvalue/63.6619772;
                break;
            case "revolution":
                rtoradian = inputvalue*6.28318531;
                break;
            case "arcminute":
                rtoradian = inputvalue/3437.74677;
                break;
            case "arcsecond":
                rtoradian = inputvalue/206264.806;
                break;
            case "milliarcsecond":
                rtoradian = inputvalue/2.0626e+8;
                break;
            case "microarcsecond":
                rtoradian = inputvalue/2.0626e+11;
                break;
            
        }

        switch(unitto){
            case "degree":
                rfromradian = rtoradian*57.29577;
                break;
            case "radian":
                rfromradian = rtoradian/1;
                break;
            case "milliradian":
                rfromradian = rtoradian*1000;
                break;
            case "microradian":
                rfromradian = rtoradian*1000000;
                break;
            case "gradian":
                rfromradian = rtoradian*63.6619772;
                break;
            case "revolution":
                rfromradian = rtoradian/6.28318531;
                break;
            case "arcminute":
                rfromradian = rtoradian*3437.74677;
                break;
            case "arcsecond":
                rfromradian = rtoradian*206264.806;
                break;
            case "milliarcsecond":
                rfromradian = rtoradian*2.0626e+8;
                break;
            case "microarcsecond":
                rfromradian = rtoradian*2.0626e+11;
                break;
        }
    }
        document.getElementById("output").innerHTML = rfromradian;
}

//for voltage

function voltage(){
    let inputvalue = document.getElementById("in_value").value;
    let unitfrom = document.getElementById("voltin_unit").value;
    let unitto = document.getElementById("voltout_unit").value;
    let rtovolt = 0;
    let rfromvolt = 0;

    if(unitfrom==unitto){
        rfromvolt = inputvalue;
    }
    else{
        
        switch(unitfrom){
            case "microvolt":
                rtovolt = inputvalue/1000000;
                break;
            case "millivolt":
                rtovolt = inputvalue/1000;
                break;
            case "volt":
                rtovolt = inputvalue*1;
                break;
            case "kilovolt":
                rtovolt = inputvalue*1000;
                break;
            case "megavolt":
                rtovolt = inputvalue*1000000;
                break;
            case "gigavolt":
                rtovolt = inputvalue*1000000000;
                break;
            case "teravolt":
                rtovolt = inputvalue*1000000000000;
                break;
            case "petavolt":
                rtovolt = inputvalue*1000000000000000;
                break;
            case "exavolt":
                rtovolt = inputvalue*1000000000000000000n;
                break;
        }

        switch(unitto){
            case "microvolt":
                rfromvolt = rtovolt/1000000;
                break;
            case "millivolt":
                rfromvolt = rtovolt/1000;
                break;
            case "volt":
                rfromvolt = rtovolt*1;
                break;
            case "kilovolt":
                rfromvolt = rtovolt*1000;
                break;
            case "megavolt":
                rfromvolt = rtovolt*1000000;
                break;
            case "gigavolt":
                rfromvolt = rtovolt*1000000000;
                break;
            case "teravolt":
                rfromvolt = rtovolt*1000000000000;
                break;
            case "petavolt":
                rfromvolt = rtovolt*1000000000000000;
                break;
            case "exavolt":
                rfromvolt = rtovolt*1000000000000000000n;
                break;
        }
    }
        document.getElementById("output").innerHTML = rfromvolt;
}

//for resistance

function resistance(){
    let inputvalue = document.getElementById("in_value").value;
    let unitfrom = document.getElementById("resistancein_unit").value;
    let unitto = document.getElementById("resistanceout_unit").value;
    let rtoohm = 0;
    let rfromohm = 0;

    if(unitfrom==unitto){
        rfromohm = inputvalue;
    }
    else{
        
        switch(unitfrom){
            case "microohm":
                rtoohm = inputvalue/1000000;
                break;
            case "milliohm":
                rtoohm = inputvalue/1000;
                break;
            case "ohm":
                rtoohm = inputvalue*1;
                break;
            case "kiloohm":
                rtoohm = inputvalue*1000;
                break;
            case "megaohm":
                rtoohm = inputvalue*1000000;
                break;
        }

        switch(unitto){
            case "microohm":
                rfromohm = rtoohm/1000000;
                break;
            case "milliohm":
                rfromohm = rtoohm/1000;
                break;
            case "ohm":
                rfromohm = rtoohm*1;
                break;
            case "kiloohm":
                rfromohm = rtoohm*1000;
                break;
            case "megaohm":
                rfromohm = rtoohm*1000000;
                break;
        }
    }
        document.getElementById("output").innerHTML = rfromohm;
}

//for force

function force(){
    let inputvalue = document.getElementById("in_value").value;
    let unitfrom = document.getElementById("forcein_unit").value;
    let unitto = document.getElementById("forceout_unit").value;
    let rtonewton = 0;
    let rfromnewton = 0;

    if(unitfrom==unitto){
        rfromnewton = inputvalue;
    }
    else{
        
        switch(unitfrom){
            case 'newton':
                rtonewton = inputvalue;
                break;
            case 'dyne':
                rtonewton = inputvalue / 100000;
                break;
            case 'kilogram-force':
                rtonewton = inputvalue * 9.80665;
                break;
            case 'gram-force':
                rtonewton = inputvalue * 0.00980665;
                break;
            case 'kilonewton':
                rtonewton = inputvalue * 1000;
                break;
            case 'kip-force':
                rtonewton = inputvalue * 4448.22;
                break;
            case 'metric ton-force':
                rtonewton = inputvalue * 9806.65;
                break;
            case 'pound-force':
                rtonewton = inputvalue * 4.44822;
                break;
            case 'ounce-force':
                rtonewton = inputvalue * 0.2780139;
                break;
        }

        switch(unitto){
            case 'newton':
                rfromnewton = rtonewton;
                break;
            case 'dyne':
                rfromnewton = rtonewton * 100000;
                break;
            case 'kilogram-force':
                rfromnewton = rtonewton / 9.80665;
                break;
            case 'gram-force':
                rfromnewton = rtonewton / 0.00980665;
                break;
            case 'kilonewton':
                rfromnewton = rtonewton / 1000;
                break;
            case 'kip-force':
                rfromnewton = rtonewton / 4448.22;
                break;
            case 'metric ton-force':
                rfromnewton = rtonewton / 9806.65;
                break;
            case 'pound-force':
                rfromnewton = rtonewton / 4.44822;
                break;
            case 'ounce-force':
                rfromnewton = rtonewton / 0.2780139;
                break;
        }
    }
        document.getElementById("output").innerHTML = rfromnewton;
}

//for pressure

function pressure(){
    let inputvalue = document.getElementById("in_value").value;
    let unitfrom = document.getElementById("pressurein_unit").value;
    let unitto = document.getElementById("pressureout_unit").value;
    let rtopascal = 0;
    let rfrompascal = 0;

    if(unitfrom==unitto){
        rfrompascal = inputvalue;
    }
    else{
        
        switch(unitfrom){
            case 'pascal':
                rtopascal = inputvalue;
                break;
            case 'bar':
                rtopascal = inputvalue * 100000;
                break;
            case 'atmosphere':
                rtopascal = inputvalue * 101325;
                break;
            case 'torr':
                rtopascal = inputvalue * 133.322;
                break;
            // case 'pound per square inch':
            case 'psi':
                rtopascal = inputvalue * 6894.76;
                break;
            case 'poundal per square foot':
                rtopascal = inputvalue * 47.8803;
                break;
            case 'kilopascal':
                rtopascal = inputvalue * 1000;
                break;
            case 'megapascal':
                rtopascal = inputvalue * 1000000;
                break;
            case 'millibar':
                rtopascal = inputvalue * 100;
                break;
            case 'pascal (absolute)':
                rtopascal = inputvalue;
                break;
            case 'pascal (gauge)':
                rtopascal = inputvalue + 101325;
                break;
            case 'kilogram per square meter':
                rtopascal = inputvalue * 9.80665;
                break;
            case 'ton per square foot':
                rtopascal = inputvalue * 31797.5;
                break;
            case 'ton per square inch':
                rtopascal = inputvalue * 2240000;
                break;
        }

        switch(unitto){
            case 'pascal':
                rfrompascal = rtopascal;
                break;
            case 'bar':
                rfrompascal = rtopascal / 100000;
                break;
            case 'atmosphere':
                rfrompascal = rtopascal / 101325;
                break;
            case 'torr':
                rfrompascal = rtopascal / 133.322;
                break;
            // case 'pound per square inch':
            case 'psi':
                rfrompascal = rtopascal / 6894.76;
                break;
            case 'poundal per square foot':
                rfrompascal = rtopascal / 47.8803;
                break;
            case 'kilopascal':
                rfrompascal = rtopascal / 1000;
                break;
            case 'megapascal':
                rfrompascal = rtopascal / 1000000;
                break;
            case 'millibar':
                rfrompascal = rtopascal / 100;
                break;
            case 'pascal (absolute)':
                rfrompascal = rtopascal;
                break;
            case 'pascal (gauge)':
                rfrompascal = rtopascal - 101325;
                break;
            case 'kilogram per square meter':
                rfrompascal = rtopascal / 9.80665;
                break;
            case 'ton per square foot':
                rfrompascal = rtopascal / 31797.5;
                break;
            case 'ton per square inch':
                rfrompascal = rtopascal / 2240000;
                break;
        }
    }
        document.getElementById("output").innerHTML = rfrompascal;
}


document.getElementById("resultBtn").addEventListener("click",function(){
    selected_unit = document.getElementById("fun_units").value;
    if(selected_unit == "length"){
        length();
    }
    else if(selected_unit == "mass"){
        mass();
    }
    else if(selected_unit == "time"){
        time();
    }
    else if(selected_unit == "volume"){
        volume();
    }
    else if(selected_unit == "temprature"){
        temprature();
    }
    else if(selected_unit == "speed"){
        speed();
    }
    else if(selected_unit == "area"){
        area();
    }
    else if(selected_unit == "current"){
        current();
    }
    else if(selected_unit == "frequency"){
        frequency();
    }
    else if(selected_unit == "angle"){
        angle();
    }
    else if(selected_unit == "voltage"){
        voltage();
    }
    else if(selected_unit == "resistance"){
        resistance();
    }
    else if(selected_unit == "force"){
        force();
    }
    else if(selected_unit == "pressure"){
        pressure();
    }
});