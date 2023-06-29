const getSites=`SELECT "siteNum", "siteName", "createdBy", "createdOn", "updatedOn"
FROM "S1".site;`

const getSitesById=`SELECT "siteNum", "siteName", "createdBy", "createdOn", "updatedOn"
FROM "S1".site WHERE "siteNum"= $1`;

const addSites=`INSERT INTO "S1".site(
	"siteNum", "siteName", "createdBy", "createdOn", "updatedOn")
	VALUES ('$1', '$2', '$3', CURRENT_DATE, CURRENT_DATE)`;

module.exports={
    getSites,
    getSitesById,
    addSites
}