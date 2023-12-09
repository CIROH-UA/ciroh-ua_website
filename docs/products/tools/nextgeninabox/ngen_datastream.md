# Ngen-datastream

[Ngen-datastream repository](https://github.com/CIROH-UA/ngen-datastream) is developed to generate the required data for the NextGen Framework and to run NextGen In A Box (NGIAB). An ngen run directory, named `data_dir`, you'll find three necessary subfolders: `config`, `forcings`, `outputs`, and an optional fourth subfolder, `metadata`. While the `data_dir` can have any name, the subfolders must follow this specific naming convention.

Refer GitHub Readme for more details [here](https://github.com/CIROH-UA/ngen-datastream#readme)

Contributors: Jordan Laser, Zach Wills, Hari Teja

### Directory Structure:

- **config**: Contains model configuration files and hydrofabric configuration files. More details [here](https://github.com/CIROH-UA/ngen-datastream#Configuration-directory).

- **forcings**: Holds catchment-level forcing timeseries files. These are generated using the [forcingprocessor](https://github.com/CIROH-UA/ngen-datastream/tree/main/forcingprocessor). Forcing files include variables like wind speed, temperature, precipitation, and solar radiation.

- **metadata**: An optional subfolder, programmatically generated and used internally by `ngen`. Do not edit this folder.

- **outputs**: Where `ngen` places the output files.

# Environment Requirements

Python 3.9

# Installation Steps

**Step 1:** Clone the repository
```bash
git clone https://github.com/CIROH-UA/ngen-datastream.git
```

**Step 2:** Install the requirements

```bash
cd ngen-datastream
pip install -r requirements.txt
pip install -e forcingprocessor
```

## Steps to Run ForcingProcessor to Generate Forcing Files

The ForcingProcessor converts National Water Model (NWM) forcing data into Next Generation National Water Model (ngen) forcing data. 
The motivation for this tool is NWM data is gridded and stored within netCDFs for each forecast hour. 
Ngen inputs this same forcing data, but in the format of per-catchment csv files that hold time series data. 
Forcingprocessor is driven by a configuration file that is explained, with an example, in detail below. The config argument accepts an S3 URL.

**Step 1:** Navigate to the forcingprocessor/src/ directory

```bash
cd forcingprocessor/src/forcingprocessor
```

***Step 2:*** Generate NWM files
You can generate nwm files using the command or give the input files manually 
such as
https://noaa-nwm-pds.s3.amazonaws.com/nwm.20231106/forcing_short_range/nwm.t00z.short_range.forcing.f001.conus.nc

```bash
python nwm_filenames_generator.py ../../configs/conf.json
```

Note: Provide the S3 bucket address in the config file, not the file in the filenamelist.txt.

***Step 3:*** Generate weights file

```bash
python weight_generator.py 'path to geopackage' 'path to output weights to' 'path to example NWM forcing file'
```

Use the small_weights.json file for a test run inside the weights directory or download it from the S3 bucket: https://ngenresourcesdev.s3.us-east-2.amazonaws.com/10U_weights.json

***Step 4:*** Build the config file
Set the dates and specify the location for filenamelist.txt and weights.json accordingly in conf.json.
```bash

{
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
```

***Step 5:*** Run forcingprocessor

```bash
python forcingprocessor.py conf.json
```

Note: There might be dependency issues if you use any other Python versions apart from Python 3.9.

