# Ngen-DataStream
This repository is to genereate date required for NextGen Framework.
An ngen run directory `data_dir` is composed of three necessary subfolders `config, forcings, outputs` and an optional fourth subfolder `metadata`. `data_dir` may have any name, but the subfolders must follow this naming convention.

The  `data_dir`  directory contains the following subfolders:

-   `config`: model configuration files and hydrofabric configuration files. A deeper explanation  [here](https://github.com/CIROH-UA/ngen-datastream#Configuration-directory)
-   `forcings`: catchment-level forcing timeseries files. These can be generated with the  [forcingprocessor](https://github.com/CIROH-UA/ngen-datastream/tree/main/forcingprocessor). Forcing files contain variables like wind speed, temperature, precipitation, and solar radiation.
-   `metadata`  is an optional subfolder. This is programmatically generated and it used within to ngen. Do not edit this folder.
-   `outputs`: This is where ngen will place the output files.


# Environment Requriements
Python 3.9

# Steps to install

Step -1 Clone the repository
>git clone https://github.com/CIROH-UA/ngen-datastream.git



Step- 2 Install the requirements
>cd ngen-datastream
>pip install -r requirements.txt


## Steps to Run ForcingProcessor to generate forcing files

Forcingprocessor converts National Water Model (NWM) forcing data into Next Generation National Water Model (ngen) forcing data. The motivation for this tool is NWM data is gridded and stored within netCDFs for each forecast hour. Ngen inputs this same forcing data, but in the format of per-catchment csv files that hold time series data. Forcingprocessor is driven by a configuration file that is explained, with an example, in detail below. The config argument accepts an s3 URL.
>cd forcingprocessor/src/
## Generate NWM files
You can generate nwm files using the command or give the input files manually 
such as
>https://noaa-nwm-pds.s3.amazonaws.com/nwm.20231106/forcing_short_range/nwm.t00z.short_range.forcing.f001.conus.nc

>python nwm_filenames_generator.py conf_nwm_files.json
### Note : only give the S3 bucket address not the file in the filenamelist.txt

## Generate weights file
You can generate weights file using  
>python weight_generator.py  'path to geopackage' 'path to output weights to' 'path to example NWM forcing file'

You can also use the small_weights.json  file for test run inside the weights directory or download it from the S3 bucket
>https://ngenresourcesdev.s3.us-east-2.amazonaws.com/10U_weights.json

## Build  the config file

set the dates and specify the location for filenamelist.txt and  weights.json accordingly

>{
    "forcing"  : {
        "start_date"   : "202311060000",
        "end_date"     : "202311060000",
        "nwm_file"     : "./filenamelist.txt",  
        "weight_file"  : "./weights_01.json"
    },
    "storage":{
        "storage_type"     : "local",
        "output_bucket"    : "",
        "output_path"      : "./data",
        "output_file_type" : "csv"
    },    
    "run" : {
        "verbose"       : true,
        "collect_stats" : true,
        "proc_threads"  : 3
    }
}

## Run forcingprocessor
>python forcingprocessor.py conf.json

### Note: dependency issues if you use any other python versions apart from python 3.9
