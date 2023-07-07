//for step master
const getSteps=`SELECT "stepNum", "stepName" FROM "S1".step_master`; 

const getStepsById=`SELECT "stepNum", "stepName" FROM "S1".step_master  WHERE "stepNum"=$1`;

const addSteps=`INSERT INTO "S1".step_master("stepNum", "stepName") VALUES ($1, $2)`;

module.exports={
    getSteps,
    getStepsById,
    addSteps
}