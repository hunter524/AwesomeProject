"use strict"
;const fs = require("fs");
const rootDir = "/media/hunter/12345/files-2.1";
var groupDirs = fs.readdirSync(rootDir);
for (let groupDir of groupDirs) {
    //第一层目录(group)
    var groupOriginDir = groupDir.toString();
    let fixedGroupDir = groupOriginDir.replace(/\./g, '/');
    console.log("groupOriginDir:", groupOriginDir, "fixedGroupDir", fixedGroupDir);
    let eachDirs = "";
    fixedGroupDir.split('/').forEach((v) => {
        eachDirs = eachDirs + "/" + v;
        var path = rootDir + eachDirs;
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path);
        }
    });
    //遍历第二层目录(artifact)
    var absoluteGroupDir = rootDir + '/' + groupOriginDir;
    var artifactDirs = fs.readdirSync(absoluteGroupDir);
    for (let artifactDir of artifactDirs) {
        var absoluteArtifactDir = absoluteGroupDir + '/' + artifactDir.toString();
        console.log("absoluteArtifactDir :", absoluteArtifactDir);
        var stats = fs.lstatSync(absoluteArtifactDir);
        if (!stats.isDirectory()) {
            continue;
        }
        var pathAtifact = rootDir + "/" + fixedGroupDir.toString() + "/" + artifactDir + "/";
        if (!fs.existsSync(pathAtifact)) {
            fs.mkdirSync(pathAtifact);
        }
        //遍历version目录
        var versionDirs = fs.readdirSync(absoluteArtifactDir);
        for (let versionDir of versionDirs) {
            //    遍历version目录下的hash目录取得文件
            var absoluteVersionDir = absoluteArtifactDir + '/' + versionDir.toString();
            //创建正常的目录
            var versionPath = rootDir + "/" + fixedGroupDir.toString() + "/" + artifactDir + "/" + versionDir.toString();
            if (!fs.existsSync(versionPath)) {
                fs.mkdirSync(versionPath);
            }
            //遍历has目录取得每一个文件
            var hashDirs = fs.readdirSync(absoluteVersionDir);
            for (let hashDir of hashDirs) {
                if (hashDir.toString().length <39) {
                    continue
                }
                var absoluteHashDir = absoluteVersionDir + "/" + hashDir.toString();
                var realFiles = fs.readdirSync(absoluteHashDir);
                for (let realFile of realFiles) {
                    var realFileStat = fs.lstatSync(absoluteHashDir + "/" + realFile.toString());
                    if (!realFileStat.isFile()) {
                        continue
                    }
                    //变更到新的m2目录
                    var oldPath = absoluteHashDir + "/" + realFile.toString();
                    var newPath = rootDir + "/" + fixedGroupDir.toString() + "/" + artifactDir + "/" + versionDir.toString() + "/" + realFile.toString();
                    // fs.mkdirSync()
                    console.log(oldPath, newPath);
                    fs.copyFileSync(oldPath, newPath);
                    fs.unlinkSync(oldPath)
                }
                fs.rmdirSync(absoluteHashDir)
            }
            if (groupOriginDir.includes('.')) {
                fs.rmdirSync(absoluteVersionDir);
            }
        }
        if (groupOriginDir.includes('.')) {
            fs.rmdirSync(absoluteArtifactDir)
        }

    }
    //删除老的目录
    if (groupOriginDir.includes('.')) {
        fs.rmdirSync(absoluteGroupDir);
    }
}