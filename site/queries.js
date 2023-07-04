//for site
const getSites=`SELECT "siteNum", "siteName", "createdBy", "createdOn", "updatedOn"
FROM "S1".site;`

const getSitesById=`SELECT "siteNum", "siteName", "createdBy", "createdOn", "updatedOn"
FROM "S1".site WHERE "siteNum"= $1`;

const addSites=`INSERT INTO "S1".site(
	"siteNum", "siteName", "createdBy", "createdOn", "updatedOn")
	VALUES ($1, $2, $3, CURRENT_DATE, CURRENT_DATE)`;

const updateSites=`UPDATE "S1".site
SET "updatedOn"=CURRENT_DATE
WHERE "siteNum"=$1`;    


//for step master
const getSteps=`SELECT "stepNum", "stepName" FROM "S1".step_master`; 

const getStepsById=`SELECT "stepNum", "stepName" FROM "S1".step_master  WHERE "stepNum"=$1`;

const addSteps=`INSERT INTO "S1".step_master("stepNum", "stepName") VALUES ($1, $2)`;

module.exports={
    getSites,
    getSitesById,
    addSites,
    updateSites,
    getSteps,
    getStepsById,
    addSteps
}