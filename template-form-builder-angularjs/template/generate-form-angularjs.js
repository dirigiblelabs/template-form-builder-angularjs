exports.generate = function(workspaceName, projectName, filePath) {

    if (!filePath.endsWith('.form')) {
        return null;
    }

    var workspaceManager = require("workspace/v4/manager");
    var contents = workspaceManager.getWorkspace(workspaceName)
        .getProject(projectName).getFile(filePath).getContent();

    var bytes = require("io/v4/bytes");
    contents = bytes.byteArrayToText(contents);

    var form = JSON.parse(contents);

    var root = {"test": "test"};

    return JSON.stringify(root);
}