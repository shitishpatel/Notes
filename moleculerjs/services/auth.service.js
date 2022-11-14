"use strict";
const dataSvc = require('../common/sampleDataService.js');
module.exports = {
    name: "auth",
    /**
     * Service settings
     */
    settings: {
    },
    /**
     * Service metadata
     */
    metadata: {
    },
    /**
     * Service dependencies
     */
    dependencies: [],
    /**
     * Actions
     */
    actions: {
        getApplications(ctx) {
            return dataSvc.getApplications(ctx)
                .then((res) => {
                    return res;
                }, (err) => {
                    throw err;
                });
        },
        
        getToken(ctx) {
            return dataSvc.getToken(ctx)
                .then((res) => {
                    return res;
                }, (err) => {
                    throw err;
                });
        },
        getDataStudent(ctx) {
            return dataSvc.getDataStudent(ctx)
                .then((res) => {
                    // console.log(res);
                    return res;
                }, (err) => {
                    throw err;
                });
        },
        getDataTeacher(ctx) {
            return dataSvc.getDataTeacher(ctx)
                .then((res) => {
                    // console.log(res);
                    return res;
                }, (err) => {
                    throw err;
                });
        },
        addData(ctx) {
            return dataSvc.addData(ctx)
                .then((res) => {
                    // console.log(res);
                    return res;
                }, (err) => {
                    throw err;
                });
        },
        deleteData(ctx) {
            return dataSvc.deleteData(ctx)
                .then((res) => {
                    // console.log(res);
                    return res;
                }, (err) => {
                    throw err;
                });
        },
        updateData(ctx) {
            return dataSvc.updateData(ctx)
                .then((res) => {
                    // console.log(res);
                    return res;
                }, (err) => {
                    throw err;
                });
        },
        getStudentById(ctx) {
            return dataSvc.getStudentById(ctx)
                .then((res) => {
                    // console.log(res);
                    return res;
                }, (err) => {
                    throw err;
                });
        },
        addTeacherknex(ctx) {
            return dataSvc.addTeacherknex(ctx)
                .then((res) => {
                    // console.log(res);
                    return res;
                }, (err) => {
                    throw err;
                });
        },
        teacherDataknex(ctx) {
            return dataSvc.teacherDataknex(ctx)
                .then((res) => {
                    // console.log(res);
                    return res;
                }, (err) => {
                    throw err;
                });
        },

    },
    /**
     * Events
     */
    events: {
    },
    /**
     * Methods
     */
    methods: {
    },
    /**
     * Service created lifecycle event handler
     */
    created() {
    },
    /**
     * Service started lifecycle event handler
     */
    started() {
    },
    /**
     * Service stopped lifecycle event handler
     */
    stopped() {
    }
};
