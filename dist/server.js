var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// src/Server/fs.ts
var import_fs = __toModule(require("fs"));
function filesList(path) {
  return new Promise((resolve, reject) => {
    import_fs.default.readdir(path, (err, files) => {
      if (err)
        reject(err);
      else
        resolve(files);
    });
  });
}
function exist(path) {
  return new Promise((resolve, reject) => {
    import_fs.default.access(path, import_fs.default.F_OK, (err) => {
      if (err)
        resolve(false);
      else
        resolve(true);
    });
  });
}

// src/Server/main.ts
exist("server.js").then((isExist) => console.log("Is server.js exist?", isExist));
filesList("./").then((list) => {
  list.map((file) => "- " + file).forEach((text) => console.log(text));
});
