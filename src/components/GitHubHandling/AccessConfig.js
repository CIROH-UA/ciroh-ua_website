
/**
 * @module AccessConfig
 * @description
 * This module contains the configuration for accessing GitHub repositories.
 * 
 * It will contain any useful static information that we will use to access
 * GitHub's API in this project.
 */
class AccessConfig {
    /**
     * @type {string[]}
     * @description
     * The list of GitHub repository names CIROH is interested in taking ownership of.
     * This list is used to check if the organization has the repository,
     * and if so query the repository for its data.
     */
    static target_repo_names = [
        "ngen",
        "ngen-cal",
        "hydrofabric",
        "t-route",
        "sac-sma",
        "lstm",
        "inundation-mapping",
        "ngen-forcing",
        "hydrotools",
        "cfe",
        "noah-owp-modular",
        "evapotranspiration",
    ];

    /**
    * @type {string[]}
    * @description
    * List of GitHub organizations we are interested in checking.
    */
    static target_org_names = [
        "NOAA-OWP",
        "AlabamaWaterInstitute",
        "CIROH-UA"
    ];

    /**
     * @type {string}
     * @description
     * The GitHub organization name of CIROH.
     */
    static CIROH = "CIROH-UA";

    /**
     * @type {string}
     * @description
     * The GitHub organization name of AWI (Alabama Water Institute).
     */
    static AWI = "AlabamaWaterInstitute";

    /**
     * @type {string}
     * @description
     * The GitHub organization name of NOAA OWP.
     */
    static NOAA_OWP = "NOAA-OWP";
}

export default AccessConfig;
export { AccessConfig };