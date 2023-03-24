---
sidebar_position: 3
---

# Run ngen manually

## For running ngen on local machine manually:
 
Below are the steps performed on UAHPC server:

1. Load Modules if not present:
```
$ module load boost/1.72.0
$ module load cmake/3.20.1
$ module load python/python3/3.9.6
```

module list
=============================================================================
Currently Loaded Modulefiles:
 1) compilers/gcc/5.4.0   3) compilers/gcc/9.1.0   5) python/python3/3.9.6  
 2) boost/1.72.0          4) cmake/3.20.1        
 
Key:
1) 2) auto-loaded  
=============================================================================
2. Export env variables:
 
$ export CC=/share/apps/gcc/9.1.0/bin/gcc
$ export CXX=/share/apps/gcc/9.1.0/bin/g++

3. Load mpi library: 
$ module load mpi/openmpi/gcc/4.1.1

#=============================================================================
4. To Build ngen:
#=============================================================================
  
$ git clone https://github.com/NOAA-OWP/ngen.git
$ cd ngen
$ git submodule update --init --recursive -- test/googletest
$ git submodule update --init --recursive -- extern/pybind11

 
$ cmake -B ./mpibuild -S . -DMPI_ACTIVE=ON
$ cd mpibuild
$ cmake --build . --target ngen

# to build partitionGenerator (in build directory)
$ make partitionGenerator
# to generate partition config (in data directory)
$ cd ../data

$ ../mpibuild/partitionGenerator catchment_data.geojson nexus_data.geojson partition_config.json 4 '' ''


# in data directory
$ ln -s example_realization_config.json realization_config.json
 
#=============================================================================
4. To Run ngen:
#=============================================================================
4.1 Prepare script:
$ cd ngen
$ vim myscript.sh

Enter below lines in the file: 
#!/bin/bash
#SBATCH --mem-per-cpu 4000
#SBATCH -n 4
#SBATCH -o output.log
#SBATCH --qos main
 
module load boost/1.72.0
module load cmake/3.20.1
module load python/python3/3.9.6
module load mpi/openmpi/gcc/4.1.1
export CC=/share/apps/gcc/9.1.0/bin/gcc
export CXX=/share/apps/gcc/9.1.0/bin/g++
 
srun --mpi=pmi2 ./mpibuild/ngen ./data/catchment_data.geojson "" ./data/nexus_data.geojson "" ./data/realization_config.json ./data/partition_config.json


4.2 Run from ngen directory
$ sbatch myscript.sh

Output example:

 