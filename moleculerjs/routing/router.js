"use strict";
module.exports = [{
    path: "/api",
    aliases: {
        "GET /sample": "auth.getApplications",
        "POST /token":"auth.getToken",
        "GET /student/data":"auth.getDataStudent",
        "GET /teacher/data":"auth.getDataTeacher",
        "POST /addData":"auth.addData",
        "DELETE /delete/:id":"auth.deleteData",
        "PUT /update/:id":"auth.updateData",
        "GET /student/:id":"auth.getStudentById",
        "POST /knex/addTeacher":"auth.addTeacherknex",
        "GET /knex/getdata":"auth.teacherDataknex"
    },
    // Disable to call not-mapped actions
    mappingPolicy: "restrict",
    // Set CORS headers
    cors: true,
    // Parse body content
    bodyParsers: {
        json: {
            limit: '500mb',
            strict: false
        },
        urlencoded: {
            limit: '500mb',
            extended: true
        }
    },
    onBeforeCall(ctx, route, req, res) {
    },
    onError(req, res, err) {
    }
}];
