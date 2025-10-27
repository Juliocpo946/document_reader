(función webpackUniversalModuleDefinition(raíz, fábrica) {
	si (tipo de exportaciones === 'objeto' y tipo de módulo === 'objeto')
		módulo.exports = fábrica(require("jszip"));
	de lo contrario si (tipo de define === 'función' && define.amd)
		define(["jszip"], fábrica);
	de lo contrario si (tipo de exportaciones === 'objeto')
		exportaciones["docx"] = fábrica(require("jszip"));
	demás
		raíz["docx"] = fábrica(raíz["JSZip"]);
})(globalThis, (__MÓDULO EXTERNO DEL PAQUETE WEB_jszip__) => {
devolver /******/ (() => { // webpackBootstrap
/******/ "uso estricto";
/******/ var __webpack_modules__ = ({

/***/ "./src/mathml.scss":
/*!*************************!*\
  !*** ./src/mathml.scss ***!
  \*************************/
/***/ ((módulo, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* exportación de armonía */ __webpack_require__.d(__webpack_exports__, {
/* exportación de armonía */ "predeterminado": () => (__WEBPACK_DEFAULT_EXPORT__)
/* exportación de armonía */ });
/* importación de armonía */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* importación de armonía */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* importación de armonía */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* importación de armonía */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* importación de armonía */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* importación de armonía */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Importaciones



var ___CSS_LOADER_URL_IMPORT_0___ = nueva URL(/* importación de activos */ __webpack_require__(/*! datos:imagen/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 100%27 preserveAspectRatio=%27none%27%3E%3Cpath d=%27m0,75 l5,0 l5,25 l10,-100%27 trazo=%27negro%27 relleno=%27none%27 efecto vectorial=%27trazo sin escala%27/%3E%3C/svg%3E */ "datos:imagen/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 100%27 preserveAspectRatio=%27none%27%3E%3Cpath d=%27m0,75 l5,0 l5,25 l10,-100%27 trazo=%27negro%27 relleno=%27none%27 efecto vectorial=%27trazo sin escala%27/%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___predeterminado()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___predeterminado()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Módulo
___CSS_LOADER_EXPORT___.push([module.id, "@namespace \"http://www.w3.org/1998/Math/MathML\";\nmath {\n mostrar: bloque en línea;\n altura de línea: inicial;\n}\n\nmfrac {\n mostrar: bloque en línea;\n alineación vertical: -50%;\n alineación de texto: centro;\n}\nmfrac > :first-child {\n borde inferior: sólido delgado color actual;\n}\nmfrac > * {\n mostrar: bloque;\n}\n\nmsub > :nth-child(2) {\n tamaño de fuente: menor;\n alineación vertical: sub;\n}\n\nmsup > :nth-child(2) {\n tamaño de fuente: menor;\n alineación vertical: super;\n}\n\nmunder, mover, munderover {\n display: inline-flex;\n flex-flow: column nowrap;\n vertical-align: middle;\n text-align: center;\n}\nmunder > :not(:first-child), mover > :not(:first-child), munderover > :not(:first-child) {\n font-size: lowest;\n}\n\nmunderover > :last-child {\n order: -1;\n}\n\nmroot, msqrt {\n position: relative;\n display: inline-block;\n border-top: solid thin currentColor;\n margin-top: 0.5px;\n vertical-align: middle;\n margin-left: 1ch;\n}\nmroot:before, msqrt:before {\n content: \"\";\n display: inline-block;\n position: absolute;\n width: 1ch;\n left: -1ch;\n top: -1px;\n abajo: 0;\n imagen de fondo: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}", "",{"versión":3,"fuentes":["webpack://./src/mathml.scss"],"nombres":[],"mappings":"AAAA,+CAAA;AAEA;EACI,qBAAA;EACA,oBAAA;AAAJ;;AAGA;EACI,qBAAA;EA CA,oBAAA;EACA,kBAAA;AAAJ;AAEI;EACI,sCAAA;AAAR;AAGI;EACI,cAAA;AADR;;AAMI;EACI,kBAAA;EACA,mBAAA;AAHR;;AAQI;EACI,kBAAA;EACA,qBAAA;AALR;;AASA;EACI,o BAAA;EACA,wBAAA;EACA,sBAAA;EACA,kBAAA;AANJ;AAQI;EACI,kBAAA;AANR;;AAWI;EAAgB,SAAA;AAPpB;;AAUA;EACI,kBAAA;EACA,qBAAA;EACA,mCAAA;EACA,iBAAA;EACA,s BAAA;EACA,gBAAA;AAPJ;AASI;EACI,WAAA;EACA,qBAAA;EACA,kBAAA;EACA,UAAA;EACA,UAAA;EACA,SAAA;EACA,SAAA;EACA,yDAAA;AAPR","sourcesContent":["@namespace \"http://www.w3.org/1998/Math/MathML\";\r\n\r\nmath {\r\n mostrar: bloque en línea;\r\n altura de línea: inicial;\r\n}\r\n\r\nmfrac {\r\n mostrar: bloque en línea;\r\n alineación vertical: -50%;\r\n alineación de texto: centro;\r\n\r\n &>:first-child {\r\n borde inferior: sólido delgado currentColor;\r\n }\r\n\r\n &>* {\r\n mostrar: bloque;\r\n }\r\n}\r\n\r\nmsub {\r\n &>:nth-child(2) {\r\n tamaño de fuente: menor;\r\n alineación vertical: sub;\r\n }\r\n}\r\n\r\nmsup {\r\n &>:nth-child(2) {\r\n tamaño de fuente: menor;\r\n alineación vertical: super;\r\n }\r\n}\r\n\r\nmunder, mover, munderover {\r\n visualización: inline-flex;\r\n flex-flow: columna nowrap;\r\n alineación vertical: medio;\r\n alineación de texto: centro;\r\n\r\n &>:not(:first-child) {\r\n tamaño de fuente: menor;\r\n }\r\n}\r\n\r\nmunderover {\r\n &>:last-child { orden: -1; }\r\n}\r\n\r\nmroot, msqrt {\r\n posición: relativa;\r\n visualización: inline-block;\r\n borde superior:sólido delgado currentColor; \r\n margen superior: 0.5px;\r\n alineación vertical: medio; \r\n margen izquierdo: 1ch; \r\n\r\n &:before {\r\n contenido: \"\";\r\n visualización: bloque en línea;\r\n posición: absoluta;\r\n ancho: 1 canal;\r\n izquierda: -1 canal;\r\n superior: -1 px;\r\n inferior: 0;\r\n imagen de fondo: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 100' preserveAspectRatio='none'%3E%3Cpath d='m0,75 l5,0 l5,25 l10,-100' trazo='negro' relleno='none' efecto vectorial='trazo sin escala'/%3E%3C/svg%3E\");\r\n }\r\n}"],"sourceRoot":""}]);
// Exportaciones
/* exportación predeterminada de armonía */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___.toString());


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((módulo) => {



/*
  Licencia MIT http://www.opensource.org/licenses/mit-license.php
  Autor Tobias Koppers @sokra
*/
módulo.exports = función (cssWithMappingToString) {
  var list = []; // devuelve la lista de módulos como cadena CSS

  lista.toString = función toString() {
    devuelve este.map(función (elemento) {
      var contenido = "";
      var needLayer = typeof item[5] !== "indefinido";

      si (elemento[4]) {
        contenido += "@supports (".concat(item[4], ") {");
      }

      si (elemento[2]) {
        contenido += "@media ".concat(item[2], " {");
      }

      si (necesitaCapa) {
        contenido += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      contenido += cssWithMappingToString(item);

      si (necesitaCapa) {
        contenido += "}";
      }

      si (elemento[2]) {
        contenido += "}";
      }

      si (elemento[4]) {
        contenido += "}";
      }

      devolver contenido;
    }).unirse("");
  }; // importar una lista de módulos a la lista


  lista.i = función i(módulos, medios, deduplicación, soportes, capa) {
    si (tipo de módulos === "cadena") {
      módulos = [[null, módulos, indefinido]];
    }

    var yaImportedModules = {};

    si (deduplicar) {
      para (var k = 0; k < this.length; k++) {
        var id = esto[k][0];

        si (id != nulo) {
          yaImportedModules[id] = verdadero;
        }
      }
    }

    para (var _k = 0; _k < módulos.longitud; _k++) {
      var item = [].concat(módulos[_k]);

      si (deduplicar && yaImportedModules[item[0]]) {
        continuar;
      }

      si (tipo de capa !== "indefinido") {
        si (tipo de elemento[5] === "indefinido") {
          elemento[5] = capa;
        } demás {
          elemento[1] = "@layer".concat(elemento[5].length > 0 ? " ".concat(elemento[5]) : "", " {").concat(elemento[1], "}");
          elemento[5] = capa;
        }
      }

      si (medios) {
        si (!item[2]) {
          elemento[2] = medios;
        } demás {
          elemento[1] = "@media ".concat(elemento[2], " {").concat(elemento[1], "}");
          elemento[2] = medios;
        }
      }

      si (soporta) {
        si (!item[4]) {
          elemento[4] = "".concat(soporta);
        } demás {
          elemento[1] = "@supports (".concat(elemento[4], ") {").concat(elemento[1], "}");
          item[4] = soporta;
        }
      }

      lista.push(elemento);
    }
  };

  lista de retorno;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((módulo) => {



módulo.exports = función (url, opciones) {
  si (!opciones) {
    opciones = {};
  }

  si (!url) {
    URL de retorno;
  }

  url = String(url.__esModule ? url.default : url); // Si la URL ya está entre comillas, elimínelas

  si (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  si (opciones.hash) {
    url += opciones.hash;
  } // ¿Se debe ajustar la URL?
  // Ver https://drafts.csswg.org/css-values-3/#urls


  si (/["'() \t\n]|(%20)/.test(url) || opciones.needQuotes) {
    devolver "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  URL de retorno;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((módulo) => {



módulo.exportaciones = función (elemento) {
  var contenido = elemento[1];
  var cssMapping = elemento[3];

  si (!cssMapping) {
    devolver contenido;
  }

  si (tipo de btoa === "función") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var datos = "sourceMappingURL=datos:application/json;conjunto de caracteres=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(datos, " */");
    var sourceURLs = cssMapping.sources.map(función (fuente) {
      devolver "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(fuente, " */");
    });
    devolver [contenido].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  devolver [contenido].join("\n");
};

/***/ }),

/***/ "./src/common/open-xml-package.ts":
/*!****************************************!*\
  !*** ./src/common/open-xml-package.ts ***!
  \****************************************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones, __paquete_web_require__) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exportaciones.OpenXmlPackage = void 0;
constante JSZip = __webpack_require__(/*! jszip */ "jszip");
constante xml_parser_1 = __webpack_require__(/*! ../parser/xml-parser */ "./src/parser/xml-parser.ts");
constante utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
constante relación_1 = __webpack_require__(/*! ./relación */ "./src/common/relación.ts");
clase OpenXmlPackage {
    constructor(_zip, opciones) {
        este._zip = _zip;
        esto.opciones = opciones;
        este.xmlParser = nuevo xml_parser_1.XmlParser();
    }
    obtener(ruta) {
        devuelve este._zip.files[normalizePath(ruta)];
    }
    actualizar(ruta, contenido) {
        this._zip.file(ruta, contenido);
    }
    carga estática(entrada, opciones) {
        devuelve JSZip.loadAsync(entrada).then(zip => new OpenXmlPackage(zip, opciones));
    }
    guardar(tipo = "blob") {
        devuelve esto._zip.generateAsync({ tipo });
    }
    cargar(ruta, tipo = "cadena") {
        var _a, _b;
        devolver (_b = (_a = this.get(ruta)) === null || _a === void 0 ? void 0 : _a.async(tipo)) !== null && _b !== void 0 ? _b : Promise.resolve(null);
    }
    cargarRelaciones(ruta = nulo) {
        deje que relsPath = `_rels/.rels`;
        si (ruta != nulo) {
            constante [f, fn] = (0, utils_1.splitPath)(ruta);
            relsPath = `${f}_rels/${fn}.rels`;
        }
        devuelve esto.load(relsPath)
            .then(txt => txt ? (0, relación_1.parseRelationships)(este.parseXmlDocument(txt).firstElementChild, este.xmlParser) : null);
    }
    analizarXmlDocument(txt) {
        devolver (0, xml_parser_1.parseXmlString)(txt, este.opciones.trimXmlDeclaration);
    }
}
exportaciones.OpenXmlPackage = OpenXmlPackage;
función normalizePath(ruta) {
    devolver path.startsWith('/') ? path.substr(1) : ruta;
}


/***/ }),

/***/ "./src/common/part.ts":
/*!****************************!*\
  !*** ./src/common/part.ts ***!
  \****************************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones, __paquete_web_require__) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exportaciones.Parte = void 0;
constante xml_parser_1 = __webpack_require__(/*! ../parser/xml-parser */ "./src/parser/xml-parser.ts");
clase Parte {
    constructor(_paquete, ruta) {
        este._paquete = _paquete;
        este.path = ruta;
    }
    carga() {
        devolver Promise.all([
            este._paquete.loadRelationships(este.ruta).then(rels => {
                esto.rels = rels;
            }),
            este._paquete.load(este.ruta).then(texto => {
                const xmlDoc = this._package.parseXmlDocument(texto);
                si (este._paquete.opciones.keepOrigin) {
                    este._xmlDocument = xmlDoc;
                }
                this.parseXml(xmlDoc.firstElementChild);
            })
        ]);
    }
    ahorrar() {
        este._paquete.actualizar(este.ruta, (0, xml_parser_1.serializeXmlString)(este._xmlDocument));
    }
    parseXml(raíz) {
    }
}
exportaciones.Part = Parte;


/***/ }),

/***/ "./src/common/relationship.ts":
/*!************************************!*\
  !*** ./src/common/relationship.ts ***!
  \************************************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exportaciones.parseRelationships = exportaciones.RelationshipTypes = void 0;
var TiposDeRelación;
(función (TiposDeRelación) {
    RelationshipTypes["OfficeDocument"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument";
    RelationshipTypes["FontTable"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/fontTable";
    RelationshipTypes["Imagen"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/imagen";
    RelationshipTypes["Numeración"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering";
    RelationshipTypes["Estilos"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/estilos";
    RelationshipTypes["EstilosConEfectos"] = "http://schemas.microsoft.com/office/2007/relationships/estilosConEffects";
    RelationshipTypes["Tema"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/tema";
    RelationshipTypes["Configuración"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/configuración";
    RelationshipTypes["WebSettings"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/webSettings";
    RelationshipTypes["Hipervínculo"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hipervínculo";
    RelationshipTypes["Notas al pie"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/notas al pie";
    RelationshipTypes["Notas finales"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/notas finales";
    RelationshipTypes["Pie de página"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/pie de página";
    RelationshipTypes["Encabezado"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/encabezado";
    RelationshipTypes["Propiedades Extendidas"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/propiedades-extendidas";
    RelationshipTypes["CoreProperties"] = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties";
    RelationshipTypes["CustomProperties"] = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/custom-properties";
})(RelationshipTypes = exportaciones.RelationshipTypes || (exportaciones.RelationshipTypes = {}));
función parseRelationships(root, xml) {
    devolver xml.elements(root).map(e => ({
        id: xml.attr(e, "Id"),
        tipo: xml.attr(e, "Tipo"),
        objetivo: xml.attr(e, "Objetivo"),
        modoObjetivo: xml.attr(e, "ModoObjetivo")
    }));
}
exportaciones.parseRelationships = parseRelationships;


/***/ }),

/***/ "./src/document-parser.ts":
/*!********************************!*\
  !*** ./src/document-parser.ts ***!
  \********************************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones, __paquete_web_require__) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exportaciones.DocumentParser = exportaciones.autos = void 0;
constante dom_1 = __webpack_require__(/*! ./documento/dom */ "./src/documento/dom.ts");
constante párrafo_1 = __webpack_require__(/*! ./documento/párrafo */ "./src/documento/párrafo.ts");
constante sección_1 = __webpack_require__(/*! ./documento/sección */ "./src/documento/sección.ts");
constante xml_parser_1 = __webpack_require__(/*! ./parser/xml-parser */ "./src/parser/xml-parser.ts");
constante run_1 = __webpack_require__(/*! ./documento/run */ "./src/documento/run.ts");
const marcadores_1 = __webpack_require__(/*! ./documento/marcadores */ "./src/documento/marcadores.ts");
constante común_1 = __webpack_require__(/*! ./documento/common */ "./src/documento/common.ts");
constante vml_1 = __webpack_require__(/*! ./vml/vml */ "./src/vml/vml.ts");
exportaciones.autos = {
    shd: "heredar",
    color: "negro",
    borderColor: "negro",
    Resaltar: "transparente"
};
constante URIs de espacios de nombres admitidos = [];
constante mmlTagMap = {
    "oMath": dom_1.DomType.MmlMath,
    "oMathPara": dom_1.DomType.MmlMathParagraph,
    "f": dom_1.DomType.MmlFraction,
    "num": dom_1.DomType.MmlNumerator,
    "guarida": dom_1.DomType.MmlDenominator,
    "rad": dom_1.DomType.MmlRadical,
    "grado": dom_1.DomType.MmlDegree,
    "e": dom_1.DomType.MmlBase,
    "sSup": dom_1.DomType.MmlSuperscript,
    "sSub": dom_1.DomType.MmlSubscript,
    "sup": dom_1.DomType.MmlSuperArgument,
    "sub": dom_1.DomType.MmlSubArgument,
    "d": dom_1.DomType.MmlDelimiter,
    "nario": dom_1.DomType.MmlNario,
};
clase DocumentParser {
    constructor(opciones) {
        esto.opciones = Objeto.asignar({ ignoreWidth: false, depurar: false }, opciones);
    }
    parseNotes(xmlDoc, nombreElem, ClaseElem) {
        var resultado = [];
        para (sea el de xml_parser_1.default.elements(xmlDoc, elemName)) {
            constante nodo = nuevo elemClass();
            nodo.id = xml_parser_1.default.attr(el, "id");
            nodo.noteType = xml_parser_1.default.attr(el, "tipo");
            nodo.children = this.parseBodyElements(el);
            resultado.push(nodo);
        }
        devolver resultado;
    }
    analizarArchivoDocumental(xmlDoc) {
        var xbody = xml_parser_1.default.element(xmlDoc, "cuerpo");
        var fondo = xml_parser_1.default.element(xmlDoc, "fondo");
        var sectPr = xml_parser_1.default.element(xbody, "sectPr");
        devolver {
            tipo: dom_1.DomType.Document,
            hijos: this.parseBodyElements(xbody),
            propiedades: sectPr ? (0, sección_1.parseSectionProperties)(sectPr, xml_parser_1.default) : {},
            Estilo CSS: fondo ? this.parseBackground(fondo) : {},
        };
    }
    analizarFondo(elem) {
        var resultado = {};
        var color = xmlUtil.colorAttr(elem, "color");
        si (color) {
            resultado["color-de-fondo"] = color;
        }
        devolver resultado;
    }
    parseBodyElements(elemento) {
        var hijos = [];
        para (dejar elemento de xml_parser_1.default.elements(elemento)) {
            cambiar (elem.nombrelocal) {
                caso "p":
                    niños.push(this.parseParagraph(elem));
                    romper;
                caso "tbl":
                    hijos.push(this.parseTable(elem));
                    romper;
                caso "sdt":
                    niños.push(...this.parseSdt(elem, e => this.parseBodyElements(e)));
                    romper;
            }
        }
        devolver a los niños;
    }
    parseStylesFile(xstyles) {
        var resultado = [];
        xmlUtil.foreach(xstyles, n => {
            cambiar (n.nombrelocal) {
                caso "estilo":
                    resultado.push(this.parseStyle(n));
                    romper;
                caso "docDefaults":
                    resultado.push(this.parseDefaultStyles(n));
                    romper;
            }
        });
        devolver resultado;
    }
    parseDefaultStyles(nodo) {
        var resultado = {
            id: nulo,
            nombre: nulo,
            objetivo: nulo,
            basado en: nulo,
            estilos: []
        };
        xmlUtil.foreach(nodo, c => {
            cambiar (c.nombrelocal) {
                caso "rPrDefault":
                    var rPr = xml_parser_1.default.element(c, "rPr");
                    si (rPr)
                        resultado.styles.push({
                            objetivo: "span",
                            valores: this.parseDefaultProperties(rPr, {})
                        });
                    romper;
                caso "pPrDefault":
                    var pPr = xml_parser_1.default.element(c, "pPr");
                    si (pPr)
                        resultado.styles.push({
                            objetivo: "p",
                            valores: this.parseDefaultProperties(pPr, {})
                        });
                    romper;
            }
        });
        devolver resultado;
    }
    parseStyle(nodo) {
        var resultado = {
            id: xml_parser_1.default.attr(nodo, "styleId"),
            isDefault: xml_parser_1.default.boolAttr(nodo, "predeterminado"),
            nombre: nulo,
            objetivo: nulo,
            basado en: nulo,
            estilos: [],
            vinculado: nulo
        };
        cambiar (xml_parser_1.default.attr(nodo, "tipo")) {
            caso "párrafo":
                resultado.objetivo = "p";
                romper;
            caso "tabla":
                resultado.objetivo = "tabla";
                romper;
            caso "carácter":
                resultado.objetivo = "span";
                romper;
        }
        xmlUtil.foreach(nodo, n => {
            cambiar (n.nombrelocal) {
                caso "basedOn":
                    resultado.basedOn = xml_parser_1.default.attr(n, "val");
                    romper;
                caso "nombre":
                    resultado.nombre = xml_parser_1.default.attr(n, "val");
                    romper;
                caso "enlace":
                    resultado.linked = xml_parser_1.default.attr(n, "val");
                    romper;
                caso "siguiente":
                    resultado.siguiente = xml_parser_1.default.attr(n, "val");
                    romper;
                caso "alias":
                    resultado.aliases = xml_parser_1.default.attr(n, "val").split(",");
                    romper;
                caso "pPr":
                    resultado.styles.push({
                        objetivo: "p",
                        valores: this.parseDefaultProperties(n, {})
                    });
                    resultado.paragraphProps = (0, párrafo_1.parseParagraphProperties)(n, xml_parser_1.default);
                    romper;
                caso "rPr":
                    resultado.styles.push({
                        objetivo: "span",
                        valores: this.parseDefaultProperties(n, {})
                    });
                    resultado.runProps = (0, run_1.parseRunProperties)(n, xml_parser_1.default);
                    romper;
                caso "tblPr":
                caso "tcPr":
                    resultado.styles.push({
                        objetivo: "td",
                        valores: this.parseDefaultProperties(n, {})
                    });
                    romper;
                caso "tblStylePr":
                    para (sea s de este.parseTableStyle(n))
                        resultado.styles.push(s);
                    romper;
                caso "rsid":
                caso "qFormat":
                caso "oculto":
                caso "semi-oculto":
                caso "mostrarCuandoSeUsa":
                caso "autoRedefinir":
                caso "uiPriority":
                    romper;
                por defecto:
                    this.options.debug && console.warn(`DOCX: Elemento de estilo desconocido: ${n.localName}`);
            }
        });
        devolver resultado;
    }
    parseTableStyle(nodo) {
        var resultado = [];
        var tipo = xml_parser_1.default.attr(nodo, "tipo");
        selector var = "";
        var modificador = "";
        interruptor (tipo) {
            caso "primeraFila":
                modificator = ".first-row";
                selector = "tr.primera-fila td";
                romper;
            caso "lastRow":
                modificator = ".last-row";
                selector = "tr.última-fila td";
                romper;
            caso "primeraCol":
                modificator = ".first-col";
                selector = "td.primera-col";
                romper;
            caso "lastCol":
                modificator = ".last-col";
                selector = "td.last-col";
                romper;
            caso "band1Vert":
                modificador = ":not(.no-vband)";
                selector = "td.odd-col";
                romper;
            caso "band2Vert":
                modificador = ":not(.no-vband)";
                selector = "td.even-col";
                romper;
            caso "band1Horz":
                modificador = ":not(.no-hband)";
                selector = "tr.fila-impar";
                romper;
            caso "band2Horz":
                modificador = ":not(.no-hband)";
                selector = "tr.even-row";
                romper;
            predeterminado: return [];
        }
        xmlUtil.foreach(nodo, n => {
            cambiar (n.nombrelocal) {
                caso "pPr":
                    resultado.push({
                        objetivo: `${selector} p`,
                        mod: modificador,
                        valores: this.parseDefaultProperties(n, {})
                    });
                    romper;
                caso "rPr":
                    resultado.push({
                        objetivo: `${selector} span`,
                        mod: modificador,
                        valores: this.parseDefaultProperties(n, {})
                    });
                    romper;
                caso "tblPr":
                caso "tcPr":
                    resultado.push({
                        objetivo: selector,
                        mod: modificador,
                        valores: this.parseDefaultProperties(n, {})
                    });
                    romper;
            }
        });
        devolver resultado;
    }
    parseNumberingFile(xnums) {
        var resultado = [];
        var mapping = {};
        var balas = [];
        xmlUtil.foreach(xnums, n => {
            cambiar (n.nombrelocal) {
                caso "abstractNum":
                    this.parseAbstractNumbering(n, viñetas)
                        .forEach(x => resultado.push(x));
                    romper;
                caso "numPicBullet":
                    balas.push(this.parseNumberingPicBullet(n));
                    romper;
                caso "num":
                    var numId = xml_parser_1.default.attr(n, "numId");
                    var abstractNumId = xml_parser_1.default.elementAttr(n, "abstractNumId", "val");
                    mapeo[abstractNumId] = numId;
                    romper;
            }
        });
        resultado.forEach(x => x.id = mapping[x.id]);
        devolver resultado;
    }
    analizarNumberingPicBullet(elem) {
        var pict = xml_parser_1.default.element(elem, "pict");
        var forma = pict && xml_parser_1.default.element(pict, "forma");
        var imagedata = forma && xml_parser_1.default.element(forma, "imagedata");
        devolver datos de imagen ? {
            id: xml_parser_1.default.intAttr(elem, "numPicBulletId"),
            src: xml_parser_1.default.attr(datos de imagen, "id"),
            estilo: xml_parser_1.default.attr(forma, "estilo")
        } : nulo;
    }
    parseAbstractNumbering(nodo, viñetas) {
        var resultado = [];
        var id = xml_parser_1.default.attr(nodo, "abstractNumId");
        xmlUtil.foreach(nodo, n => {
            cambiar (n.nombrelocal) {
                caso "lvl":
                    resultado.push(this.parseNumberingLevel(id, n, viñetas));
                    romper;
            }
        });
        devolver resultado;
    }
    parseNumberingLevel(id, nodo, viñetas) {
        var resultado = {
            hice,
            nivel: xml_parser_1.default.intAttr(nodo, "ilvl"),
            pStyleName: indefinido,
            pEstilo: {},
            rEstilo: {},
            suff: "tabulación"
        };
        xmlUtil.foreach(nodo, n => {
            cambiar (n.nombrelocal) {
                caso "pPr":
                    esto.parseDefaultProperties(n, resultado.pStyle);
                    romper;
                caso "rPr":
                    esto.parseDefaultProperties(n, resultado.rStyle);
                    romper;
                caso "lvlPicBulletId":
                    var id = xml_parser_1.default.intAttr(n, "val");
                    resultado.bullet = bullets.find(x => x.id == id);
                    romper;
                caso "lvlText":
                    resultado.levelText = xml_parser_1.default.attr(n, "val");
                    romper;
                caso "pStyle":
                    resultado.pStyleName = xml_parser_1.default.attr(n, "val");
                    romper;
                caso "numFmt":
                    resultado.formato = xml_parser_1.default.attr(n, "val");
                    romper;
                caso "suff":
                    resultado.suff = xml_parser_1.default.attr(n, "val");
                    romper;
            }
        });
        devolver resultado;
    }
    parseSdt(nodo, analizador) {
        const sdtContent = xml_parser_1.default.element(nodo, "sdtContent");
        devolver sdtContent ? parser(sdtContent) : [];
    }
    parseInserted(nodo, parentParser) {
        var _a, _b;
        devolver {
            tipo: dom_1.DomType.Insertado,
            hijos: (_b = (_a = parentParser(nodo)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : []
        };
    }
    parseDeleted(nodo, parentParser) {
        var _a, _b;
        devolver {
            tipo: dom_1.DomType.Eliminado,
            hijos: (_b = (_a = parentParser(nodo)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : []
        };
    }
    parseParagraph(nodo) {
        var resultado = { tipo: dom_1.DomType.Paragraph, hijos: [] };
        para (sea el de xml_parser_1.default.elements(nodo)) {
            cambiar (el.nombrelocal) {
                caso "pPr":
                    este.parseParagraphProperties(el, resultado);
                    romper;
                caso "r":
                    resultado.children.push(this.parseRun(el, resultado));
                    romper;
                caso "hipervínculo":
                    resultado.children.push(this.parseHyperlink(el, resultado));
                    romper;
                caso "bookmarkStart":
                    resultado.children.push((0, bookmarks_1.parseBookmarkStart)(el, xml_parser_1.default));
                    romper;
                caso "bookmarkEnd":
                    resultado.children.push((0, bookmarks_1.parseBookmarkEnd)(el, xml_parser_1.default));
                    romper;
                caso "oMath":
                caso "oMathPara":
                    resultado.children.push(this.parseMathElement(el));
                    romper;
                caso "sdt":
                    resultado.children.push(...this.parseSdt(el, e => this.parseParagraph(e).children));
                    romper;
                caso "ins":
                    resultado.children.push(this.parseInserted(el, e => this.parseParagraph(e)));
                    romper;
                caso "del":
                    resultado.children.push(this.parseDeleted(el, e => this.parseParagraph(e)));
                    romper;
            }
        }
        devolver resultado;
    }
    parseParagraphProperties(elem, párrafo) {
        esto.parseDefaultProperties(elem, párrafo.cssStyle = {}, null, c => {
            si ((0, párrafo_1.parseParagraphProperty)(c, párrafo, xml_parser_1.default))
                devuelve verdadero;
            cambiar (c.nombrelocal) {
                caso "pStyle":
                    párrafo.styleName = xml_parser_1.default.attr(c, "val");
                    romper;
                caso "cnfStyle":
                    párrafo.className = valores.classNameOfCnfStyle(c);
                    romper;
                caso "framePr":
                    este.parseFrame(c, párrafo);
                    romper;
                caso "rPr":
                    romper;
                por defecto:
                    devuelve falso;
            }
            devuelve verdadero;
        });
    }
    parseFrame(nodo, párrafo) {
        var dropCap = xml_parser_1.default.attr(nodo, "dropCap");
        si (dropCap == "drop")
            párrafo.cssStyle["float"] = "izquierda";
    }
    parseHyperlink(nodo, padre) {
        var resultado = { tipo: dom_1.DomType.Hyperlink, padre: padre, hijos: [] };
        var anchor = xml_parser_1.default.attr(nodo, "ancla");
        var relId = xml_parser_1.default.attr(nodo, "id");
        si (ancla)
            resultado.href = "#" + ancla;
        si (relId)
            resultado.id = relId;
        xmlUtil.foreach(nodo, c => {
            cambiar (c.nombrelocal) {
                caso "r":
                    resultado.children.push(this.parseRun(c, resultado));
                    romper;
            }
        });
        devolver resultado;
    }
    parseRun(nodo, padre) {
        var resultado = { tipo: dom_1.DomType.Run, padre: padre, hijos: [] };
        xmlUtil.foreach(nodo, c => {
            c = este.checkAlternateContent(c);
            cambiar (c.nombrelocal) {
                caso "t":
                    resultado.hijos.push({
                        tipo: dom_1.DomType.Text,
                        texto: c.textContent
                    });
                    romper;
                caso "delText":
                    resultado.hijos.push({
                        tipo: dom_1.DomType.DeletedText,
                        texto: c.textContent
                    });
                    romper;
                caso "fldSimple":
                    resultado.hijos.push({
                        tipo: dom_1.DomType.SimpleField,
                        instrucción: xml_parser_1.default.attr(c, "instr"),
                        bloqueo: xml_parser_1.default.boolAttr(c, "bloqueo", falso),
                        sucio: xml_parser_1.default.boolAttr(c, "sucio", falso)
                    });
                    romper;
                caso "instrText":
                    resultado.fieldRun = verdadero;
                    resultado.hijos.push({
                        tipo: dom_1.DomType.Instrucción,
                        texto: c.textContent
                    });
                    romper;
                caso "fldChar":
                    resultado.fieldRun = verdadero;
                    resultado.hijos.push({
                        tipo: dom_1.DomType.ComplexField,
                        tipoDeCaracter: xml_parser_1.default.attr(c, "fldCharType"),
                        bloqueo: xml_parser_1.default.boolAttr(c, "bloqueo", falso),
                        sucio: xml_parser_1.default.boolAttr(c, "sucio", falso)
                    });
                    romper;
                caso "noBreakHyphen":
                    resultado.children.push({ tipo: dom_1.DomType.NoBreakHyphen });
                    romper;
                caso "br":
                    resultado.hijos.push({
                        tipo: dom_1.DomType.Break,
                        break: xml_parser_1.default.attr(c, "tipo") || "Ajuste de texto"
                    });
                    romper;
                caso "lastRenderedPageBreak":
                    resultado.hijos.push({
                        tipo: dom_1.DomType.Break,
                        salto: "lastRenderedPageBreak"
                    });
                    romper;
                caso "sym":
                    resultado.hijos.push({
                        tipo: dom_1.DomType.Symbol,
                        fuente: xml_parser_1.default.attr(c, "fuente"),
                        carácter: xml_parser_1.default.attr(c, "carácter")
                    });
                    romper;
                caso "pestaña":
                    resultado.children.push({ tipo: dom_1.DomType.Tab });
                    romper;
                caso "footnoteReference":
                    resultado.hijos.push({
                        tipo: dom_1.DomType.FootnoteReference,
                        id: xml_parser_1.default.attr(c, "id")
                    });
                    romper;
                caso "endnoteReference":
                    resultado.hijos.push({
                        tipo: dom_1.DomType.EndnoteReference,
                        id: xml_parser_1.default.attr(c, "id")
                    });
                    romper;
                caso "dibujo":
                    sea ​​d = this.parseDrawing(c);
                    si (d)
                        resultado.hijos = [d];
                    romper;
                caso "pict":
                    resultado.children.push(this.parseVmlPicture(c));
                    romper;
                caso "rPr":
                    esto.parseRunProperties(c, resultado);
                    romper;
            }
        });
        devolver resultado;
    }
    parseMathElement(elem) {
        const propsTag = `${elem.localName}Pr`;
        const resultado = { tipo: mmlTagMap[elem.localName], hijos: [] };
        para (const el de xml_parser_1.default.elements(elem)) {
            const childType = mmlTagMap[el.localName];
            si (tipoHijo) {
                resultado.children.push(this.parseMathElement(el));
            }
            de lo contrario si (el.localName == "r") {
                var ejecutar = this.parseRun(el);
                ejecutar.tipo = dom_1.DomType.MmlRun;
                resultado.hijos.push(ejecutar);
            }
            else if (el.localName == propsTag) {
                resultado.props = this.parseMathProperies(el);
            }
        }
        devolver resultado;
    }
    parseMathProperies(elem) {
        const resultado = {};
        para (const el de xml_parser_1.default.elements(elem)) {
            cambiar (el.nombrelocal) {
                caso "chr":
                    resultado.char = xml_parser_1.default.attr(el, "val");
                    romper;
                caso "degHide":
                    resultado.hideDegree = xml_parser_1.default.boolAttr(el, "val");
                    romper;
                caso "begChr":
                    resultado.beginChar = xml_parser_1.default.attr(el, "val");
                    romper;
                caso "endChr":
                    resultado.endChar = xml_parser_1.default.attr(el, "val");
                    romper;
            }
        }
        devolver resultado;
    }
    parseRunProperties(elem, ejecutar) {
        esto.parseDefaultProperties(elem, run.cssStyle = {}, null, c => {
            cambiar (c.nombrelocal) {
                caso "rStyle":
                    ejecutar.styleName = xml_parser_1.default.attr(c, "val");
                    romper;
                caso "vertAlign":
                    ejecutar.verticalAlign = valores.valueOfVertAlign(c, verdadero);
                    romper;
                por defecto:
                    devuelve falso;
            }
            devuelve verdadero;
        });
    }
    analizarVmlPicture(elem) {
        constante resultado = { tipo: dom_1.DomType.VmlPicture, hijos: [] };
        para (const el de xml_parser_1.default.elements(elem)) {
            constante hijo = (0, vml_1.parseVmlElement)(el);
            niño && resultado.niños.push(niño);
        }
        devolver resultado;
    }
    comprobarContenidoAlternativo(elem) {
        var _a;
        si (elem.localName != 'Contenido alternativo')
            elemento de retorno;
        var choice = xml_parser_1.default.element(elem, "Elección");
        si (elección) {
            var requiere = xml_parser_1.default.attr(choice, "Requiere");
            var namespaceURI = elem.lookupNamespaceURI(requiere);
            si (supportedNamespaceURIs.includes(namespaceURI))
                devolver opción.firstElementChild;
        }
        devolver (_a = xml_parser_1.default.element(elem, "Respaldo")) === nulo || _a === vacío 0 ? vacío 0 : _a.firstElementChild;
    }
    parseDrawing(nodo) {
        para (var n de xml_parser_1.default.elements(nodo)) {
            cambiar (n.nombrelocal) {
                caso "en línea":
                caso "ancla":
                    devuelve esto.parseDrawingWrapper(n);
            }
        }
    }
    parseDrawingWrapper(nodo) {
        var _a;
        var resultado = { tipo: dom_1.DomType.Drawing, hijos: [], cssStyle: {} };
        var isAnchor = nodo.localName == "ancla";
        deje que wrapType = null;
        deje simplePos = xml_parser_1.default.boolAttr(nodo, "simplePos");
        deje que posX = { relativo: "página", alineación: "izquierda", desplazamiento: "0" };
        deje que posY = { relativo: "página", alineación: "arriba", desplazamiento: "0" };
        para (var n de xml_parser_1.default.elements(nodo)) {
            cambiar (n.nombrelocal) {
                caso "simplePos":
                    si (simplePos) {
                        posX.offset = xml_parser_1.default.lengthAttr(n, "x", common_1.LengthUsage.Emu);
                        posY.offset = xml_parser_1.default.lengthAttr(n, "y", common_1.LengthUsage.Emu);
                    }
                    romper;
                caso "extensión":
                    resultado.cssStyle["ancho"] = xml_parser_1.default.lengthAttr(n, "cx", common_1.LengthUsage.Emu);
                    resultado.cssStyle["altura"] = xml_parser_1.default.lengthAttr(n, "cy", common_1.LengthUsage.Emu);
                    romper;
                caso "posiciónH":
                caso "posiciónV":
                    si (!simplePos) {
                        let pos = n.localName == "posiciónH"? posX: posY;
                        var alignNode = xml_parser_1.default.element(n, "alinear");
                        var offsetNode = xml_parser_1.default.element(n, "posOffset");
                        pos.relativo = (_a = xml_parser_1.default.attr(n, "relativoDesde")) !== null && _a !== void 0 ? _a : pos.relativo;
                        si (alignNode)
                            pos.align = alignNode.textContent;
                        si (nododesplazamiento)
                            pos.offset = xmlUtil.sizeValue(offsetNode, common_1.LengthUsage.Emu);
                    }
                    romper;
                caso "wrapTopAndBottom":
                    wrapType = "envolverSuperiorEinferior";
                    romper;
                caso "wrapNone":
                    wrapType = "wrapNone";
                    romper;
                caso "gráfico":
                    var g = este.parseGraphic(n);
                    si (g)
                        resultado.hijos.push(g);
                    romper;
            }
        }
        si (wrapType == "wrapTopAndBottom") {
            resultado.cssStyle['display'] = 'bloque';
            si (posX.align) {
                resultado.cssStyle['text-align'] = posX.align;
                resultado.cssStyle['width'] = "100%";
            }
        }
        de lo contrario si (wrapType == "wrapNone") {
            resultado.cssStyle['display'] = 'bloque';
            result.cssStyle['position'] = 'relativo';
            resultado.cssStyle["ancho"] = "0px";
            resultado.cssStyle["altura"] = "0px";
            si (posX.offset)
                resultado.cssStyle["izquierda"] = posX.offset;
            si (posY.offset)
                resultado.cssStyle["top"] = posY.offset;
        }
        de lo contrario si (isAnchor && (posX.align == 'izquierda' || posX.align == 'derecha')) {
            resultado.cssStyle["float"] = posX.align;
        }
        devolver resultado;
    }
    parseGraphic(elem) {
        var graphicData = xml_parser_1.default.element(elem, "graphicData");
        para (sea n de xml_parser_1.default.elements(graphicData)) {
            cambiar (n.nombrelocal) {
                caso "foto":
                    devuelve esto.parsePicture(n);
            }
        }
        devuelve nulo;
    }
    analizarImagen(elem) {
        var resultado = { tipo: dom_1.DomType.Image, src: "", cssStyle: {} };
        var blipFill = xml_parser_1.default.element(elem, "blipFill");
        var blip = xml_parser_1.default.element(blipFill, "blip");
        resultado.src = xml_parser_1.default.attr(blip, "incrustar");
        var spPr = xml_parser_1.default.element(elem, "spPr");
        var xfrm = xml_parser_1.default.element(spPr, "xfrm");
        result.cssStyle["posición"] = "relativo";
        para (var n de xml_parser_1.default.elements(xfrm)) {
            cambiar (n.nombrelocal) {
                caso "ext":
                    resultado.cssStyle["ancho"] = xml_parser_1.default.lengthAttr(n, "cx", common_1.LengthUsage.Emu);
                    resultado.cssStyle["altura"] = xml_parser_1.default.lengthAttr(n, "cy", common_1.LengthUsage.Emu);
                    romper;
                caso "desactivado":
                    resultado.cssStyle["izquierda"] = xml_parser_1.default.lengthAttr(n, "x", common_1.LengthUsage.Emu);
                    resultado.cssStyle["arriba"] = xml_parser_1.default.lengthAttr(n, "y", common_1.LengthUsage.Emu);
                    romper;
            }
        }
        devolver resultado;
    }
    parseTable(nodo) {
        var resultado = { tipo: dom_1.DomType.Table, hijos: [] };
        xmlUtil.foreach(nodo, c => {
            cambiar (c.nombrelocal) {
                caso "tr":
                    resultado.children.push(this.parseTableRow(c));
                    romper;
                caso "tblGrid":
                    resultado.columnas = this.parseTableColumns(c);
                    romper;
                caso "tblPr":
                    esto.parseTableProperties(c, resultado);
                    romper;
            }
        });
        devolver resultado;
    }
    parseTableColumns(nodo) {
        var resultado = [];
        xmlUtil.foreach(nodo, n => {
            cambiar (n.nombrelocal) {
                caso "gridCol":
                    resultado.push({ ancho: xml_parser_1.default.lengthAttr(n, "w") });
                    romper;
            }
        });
        devolver resultado;
    }
    parseTableProperties(elem, tabla) {
        tabla.cssStyle = {};
        tabla.cellStyle = {};
        esto.parseDefaultProperties(elem, tabla.cssStyle, tabla.cellStyle, c => {
            cambiar (c.nombrelocal) {
                caso "tblStyle":
                    tabla.styleName = xml_parser_1.default.attr(c, "val");
                    romper;
                caso "tblLook":
                    tabla.nombreClase = valores.nombreClaseOftblLook(c);
                    romper;
                caso "tblpPr":
                    esto.parseTablePosition(c, tabla);
                    romper;
                caso "tblStyleColBandSize":
                    tabla.colBandSize = xml_parser_1.default.intAttr(c, "val");
                    romper;
                caso "tblStyleRowBandSize":
                    tabla.rowBandSize = xml_parser_1.default.intAttr(c, "val");
                    romper;
                por defecto:
                    devuelve falso;
            }
            devuelve verdadero;
        });
        cambiar (tabla.cssStyle["text-align"]) {
            caso "centro":
                eliminar tabla.cssStyle["text-align"];
                tabla.cssStyle["margin-left"] = "auto";
                tabla.cssStyle["margin-right"] = "auto";
                romper;
            caso "derecho":
                eliminar tabla.cssStyle["text-align"];
                tabla.cssStyle["margin-left"] = "auto";
                romper;
        }
    }
    parseTablePosition(nodo, tabla) {
        var topFromText = xml_parser_1.default.lengthAttr(nodo, "topFromText");
        var bottomFromText = xml_parser_1.default.lengthAttr(nodo, "bottomFromText");
        var rightFromText = xml_parser_1.default.lengthAttr(nodo, "rightFromText");
        var leftFromText = xml_parser_1.default.lengthAttr(nodo, "leftFromText");
        tabla.cssStyle["float"] = 'izquierda';
        tabla.cssStyle["margin-bottom"] = valores.addSize(tabla.cssStyle["margin-bottom"], bottomFromText);
        tabla.cssStyle["margen-izquierdo"] = valores.addSize(tabla.cssStyle["margen-izquierdo"], leftFromText);
        tabla.cssStyle["margen-derecho"] = valores.addSize(tabla.cssStyle["margen-derecho"], rightFromText);
        tabla.cssStyle["margin-top"] = valores.addSize(tabla.cssStyle["margin-top"], topFromText);
    }
    parseTableRow(nodo) {
        var resultado = { tipo: dom_1.DomType.Row, hijos: [] };
        xmlUtil.foreach(nodo, c => {
            cambiar (c.nombrelocal) {
                caso "tc":
                    resultado.children.push(this.parseTableCell(c));
                    romper;
                caso "trPr":
                    esto.parseTableRowProperties(c, resultado);
                    romper;
            }
        });
        devolver resultado;
    }
    parseTableRowProperties(elem, fila) {
        fila.cssStyle = this.parseDefaultProperties(elem, {}, null, c => {
            cambiar (c.nombrelocal) {
                caso "cnfStyle":
                    fila.className = valores.classNameOfCnfStyle(c);
                    romper;
                caso "tblHeader":
                    fila.isHeader = xml_parser_1.default.boolAttr(c, "val");
                    romper;
                por defecto:
                    devuelve falso;
            }
            devuelve verdadero;
        });
    }
    parseTableCell(nodo) {
        var resultado = { tipo: dom_1.DomType.Cell, hijos: [] };
        xmlUtil.foreach(nodo, c => {
            cambiar (c.nombrelocal) {
                caso "tbl":
                    resultado.children.push(this.parseTable(c));
                    romper;
                caso "p":
                    resultado.children.push(this.parseParagraph(c));
                    romper;
                caso "tcPr":
                    esto.parseTableCellProperties(c, resultado);
                    romper;
            }
        });
        devolver resultado;
    }
    parseTableCellProperties(elem, celda) {
        cell.cssStyle = this.parseDefaultProperties(elem, {}, null, c => {
            var _a;
            cambiar (c.nombrelocal) {
                caso "gridSpan":
                    celda.span = xml_parser_1.default.intAttr(c, "val", null);
                    romper;
                caso "vMerge":
                    cell.verticalMerge = (_a = xml_parser_1.default.attr(c, "val")) !== null && _a !== void 0 ? _a : "continuar";
                    romper;
                caso "cnfStyle":
                    celda.className = valores.classNameOfCnfStyle(c);
                    romper;
                por defecto:
                    devuelve falso;
            }
            devuelve verdadero;
        });
    }
    parseDefaultProperties(elem, estilo = null, childStyle = null, manejador = null) {
        estilo = estilo || {};
        xmlUtil.foreach(elem, c => {
            si (controlador === null || controlador === void 0 ? void 0 : controlador(c))
                devolver;
            cambiar (c.nombrelocal) {
                caso "jc":
                    estilo["text-align"] = valores.valueOfJc(c);
                    romper;
                caso "textAlignment":
                    estilo["vertical-align"] = valores.valueOfTextAlignment(c);
                    romper;
                caso "color":
                    estilo["color"] = xmlUtil.colorAttr(c, "val", null, exportaciones.autos.color);
                    romper;
                caso "sz":
                    estilo["tamaño-de-fuente"] = estilo["altura-mínima"] = xml_parser_1.default.lengthAttr(c, "val", common_1.LengthUsage.FontSize);
                    romper;
                caso "shd":
                    estilo["color-de-fondo"] = xmlUtil.colorAttr(c, "relleno", null, exportaciones.autos.shd);
                    romper;
                caso "resaltado":
                    estilo["color-de-fondo"] = xmlUtil.colorAttr(c, "val", null, exportaciones.autos.highlight);
                    romper;
                caso "vertAlign":
                    romper;
                caso "posición":
                    estilo.verticalAlign = xml_parser_1.default.lengthAttr(c, "val", common_1.LengthUsage.FontSize);
                    romper;
                caso "tcW":
                    si (esto.opciones.ignorarAncho)
                        romper;
                caso "tblW":
                    estilo["ancho"] = valores.valueOfSize(c, "w");
                    romper;
                caso "trAltura":
                    esto.parseTrHeight(c, estilo);
                    romper;
                caso "huelga":
                    estilo["decoración de texto"] = xml_parser_1.default.boolAttr(c, "val", true) ? "línea continua": "ninguno";
                    romper;
                caso "b":
                    estilo["font-weight"] = xml_parser_1.default.boolAttr(c, "val", true) ? "negrita" : "normal";
                    romper;
                caso "i":
                    estilo["font-style"] = xml_parser_1.default.boolAttr(c, "val", true) ? "itálica" : "normal";
                    romper;
                caso "mayúsculas":
                    estilo["text-transform"] = xml_parser_1.default.boolAttr(c, "val", true) ? "mayúsculas" : "ninguno";
                    romper;
                caso "smallCaps":
                    estilo["text-transform"] = xml_parser_1.default.boolAttr(c, "val", true) ? "minúsculas" : "ninguno";
                    romper;
                caso "u":
                    esto.parseUnderline(c, estilo);
                    romper;
                caso "ind":
                caso "tblInd":
                    esto.parseIndentation(c, estilo);
                    romper;
                caso "rFonts":
                    esto.parseFont(c, estilo);
                    romper;
                caso "tblBorders":
                    this.parseBorderProperties(c, childStyle || estilo);
                    romper;
                caso "tblCellSpacing":
                    estilo["border-spacing"] = valores.valueOfMargin(c);
                    estilo["border-collapse"] = "separado";
                    romper;
                caso "pBdr":
                    this.parseBorderProperties(c, estilo);
                    romper;
                caso "bdr":
                    estilo["borde"] = valores.valueOfBorder(c);
                    romper;
                caso "tcBorders":
                    this.parseBorderProperties(c, estilo);
                    romper;
                caso "desaparecer":
                    si (xml_parser_1.default.boolAttr(c, "val", verdadero))
                        estilo["display"] = "ninguno";
                    romper;
                caso "kern":
                    romper;
                caso "noWrap":
                    romper;
                caso "tblCellMar":
                caso "tcMar":
                    esto.parseMarginProperties(c, childStyle || estilo);
                    romper;
                caso "tblLayout":
                    estilo["diseño-de-tabla"] = valores.valueOfTblLayout(c);
                    romper;
                caso "vAlign":
                    estilo["vertical-align"] = valores.valueOfTextAlignment(c);
                    romper;
                caso "espaciado":
                    si (elem.localName == "pPr")
                        esto.parseSpacing(c, estilo);
                    romper;
                caso "wordWrap":
                    si (xml_parser_1.default.boolAttr(c, "val"))
                        estilo["overflow-wrap"] = "romper-palabra";
                    romper;
                caso "bCs":
                caso "iCs":
                caso "szCs":
                caso "pestañas":
                caso "outlineLvl":
                caso "contextualSpacing":
                caso "tblStyleColBandSize":
                caso "tblStyleRowBandSize":
                caso "webHidden":
                caso "pageBreakBefore":
                caso "suprimirNúmerosDeLínea":
                caso "mantenerLíneas":
                caso "keepNext":
                caso "lang":
                caso "widowControl":
                caso "bidi":
                caso "rtl":
                caso "sin prueba":
                    romper;
                por defecto:
                    si (esta.opciones.debug)
                        console.warn(`DOCX: Elemento de documento desconocido: ${elem.localName}.${c.localName}`);
                    romper;
            }
        });
        estilo de retorno;
    }
    parseUnderline(nodo, estilo) {
        var val = xml_parser_1.default.attr(nodo, "val");
        si (val == nulo)
            devolver;
        cambiar (val) {
            caso "guión":
            caso "dashDotDotHeavy":
            caso "dashDotHeavy":
            caso "discontinuo pesado":
            caso "dashLong":
            caso "dashLongHeavy":
            caso "dotDash":
            caso "dotDotDash":
                estilo["text-decoration-style"] = "discontinuo";
                romper;
            caso "punteado":
            caso "dottedHeavy":
                estilo["text-decoration-style"] = "punteado";
                romper;
            caso "doble":
                estilo["text-decoration-style"] = "doble";
                romper;
            caso "único":
            caso "grueso":
                estilo["text-decoration"] = "subrayado";
                romper;
            caso "ola":
            caso "wavyDouble":
            caso "onduladoPesado":
                estilo["text-decoration-style"] = "ondulado";
                romper;
            caso "palabras":
                estilo["text-decoration"] = "subrayado";
                romper;
            caso "ninguno":
                estilo["texto-decoración"] = "ninguno";
                romper;
        }
        var col = xmlUtil.colorAttr(nodo, "color");
        si (columna)
            estilo["color-decoración-texto"] = col;
    }
    parseFont(nodo, estilo) {
        var ascii = xml_parser_1.default.attr(nodo, "ascii");
        var asciiTheme = values.themeValue(nodo, "asciiTheme");
        var fuentes = [ascii, asciiTheme].filter(x => x).join(', ');
        si (fuentes.longitud > 0)
            estilo["font-family"] = fuentes;
    }
    parseIndentation(nodo, estilo) {
        var firstLine = xml_parser_1.default.lengthAttr(nodo, "firstLine");
        var hanging = xml_parser_1.default.lengthAttr(nodo, "colgado");
        var izquierda = xml_parser_1.default.lengthAttr(nodo, "izquierda");
        var inicio = xml_parser_1.default.lengthAttr(nodo, "inicio");
        var derecha = xml_parser_1.default.lengthAttr(nodo, "derecha");
        var fin = xml_parser_1.default.lengthAttr(nodo, "fin");
        si (primera línea)
            estilo["text-indent"] = primeraLínea;
        si (colgando)
            estilo["text-indent"] = `-${hanging}`;
        si (izquierda || inicio)
            estilo["margin-left"] = izquierda || inicio;
        si (derecha || fin)
            estilo["margin-right"] = derecha || fin;
    }
    parseSpacing(nodo, estilo) {
        var before = xml_parser_1.default.lengthAttr(nodo, "antes");
        var after = xml_parser_1.default.lengthAttr(nodo, "después");
        var línea = xml_parser_1.default.intAttr(nodo, "línea", null);
        var lineRule = xml_parser_1.default.attr(nodo, "lineRule");
        si (antes)
            estilo["margin-top"] = antes;
        si (después)
            estilo["margin-bottom"] = después;
        si (línea !== null) {
            cambiar (lineRule) {
                caso "auto":
                    estilo["altura-de-línea"] = `${(línea / 240).toFixed(2)}`;
                    romper;
                caso "alMenos":
                    estilo["altura-de-línea"] = `calc(100% + ${línea / 20}pt)`;
                    romper;
                por defecto:
                    estilo["altura-de-línea"] = estilo["altura-mínima"] = `${línea / 20}pt`;
                    romper;
            }
        }
    }
    parseMarginProperties(nodo, salida) {
        xmlUtil.foreach(nodo, c => {
            cambiar (c.nombrelocal) {
                caso "izquierda":
                    salida["padding-left"] = valores.valueOfMargin(c);
                    romper;
                caso "derecho":
                    salida["padding-right"] = valores.valueOfMargin(c);
                    romper;
                caso "superior":
                    salida["padding-top"] = valores.valueOfMargin(c);
                    romper;
                caso "abajo":
                    salida["padding-bottom"] = valores.valueOfMargin(c);
                    romper;
            }
        });
    }
    parseTrHeight(nodo, salida) {
        cambiar (xml_parser_1.default.attr(nodo, "hRule")) {
            caso "exacto":
                salida["altura"] = xml_parser_1.default.lengthAttr(nodo, "val");
                romper;
            caso "alMenos":
            por defecto:
                salida["altura"] = xml_parser_1.default.lengthAttr(nodo, "val");
                romper;
        }
    }
    parseBorderProperties(nodo, salida) {
        xmlUtil.foreach(nodo, c => {
            cambiar (c.nombrelocal) {
                caso "inicio":
                caso "izquierda":
                    salida["border-left"] = valores.valueOfBorder(c);
                    romper;
                caso "fin":
                caso "derecho":
                    salida["border-right"] = valores.valueOfBorder(c);
                    romper;
                caso "superior":
                    salida["border-top"] = valores.valueOfBorder(c);
                    romper;
                caso "abajo":
                    salida["border-bottom"] = valores.valueOfBorder(c);
                    romper;
            }
        });
    }
}
exportaciones.DocumentParser = DocumentParser;
const knownColors = ['negro', 'azul', 'cian', 'azul oscuro', 'cian oscuro', 'gris oscuro', 'verde oscuro', 'magenta oscuro', 'rojo oscuro', 'amarillo oscuro', 'verde', 'gris claro', 'magenta', 'ninguno', 'rojo', 'blanco', 'amarillo'];
clase xmlUtil {
    static foreach(nodo, cb) {
        para (var i = 0; i < nodo.childNodes.length; i++) {
            sea ​​n = nodo.childNodes[i];
            si (n.nodeType == Nodo.ELEMENT_NODE)
                cb(n);
        }
    }
    colorAttr estático(nodo, attrName, defValue = null, autoColor = 'negro') {
        var v = xml_parser_1.default.attr(nodo, attrName);
        si (v) {
            si (v == "auto") {
                devolver autoColor;
            }
            de lo contrario si (coloresconocidos.includes(v)) {
                devolver v;
            }
            devuelve `#${v}`;
        }
        var themeColor = xml_parser_1.default.attr(nodo, "themeColor");
        devolver themeColor ? `var(--docx-${themeColor}-color)` : defValue;
    }
    static sizeValue(nodo, tipo = common_1.LengthUsage.Dxa) {
        devuelve (0, common_1.convertLength)(nodo.textContent, tipo);
    }
}
valores de clase {
    tema estáticoValor(c, attr) {
        var val = xml_parser_1.default.attr(c, attr);
        valor de retorno? `var(--docx-${val}-font)`: nulo;
    }
    valor estáticoDeTamaño(c, attr) {
        var tipo = común_1.LengthUsage.Dxa;
        cambiar (xml_parser_1.default.attr(c, "tipo")) {
            caso "dxa": romper;
            caso "pct":
                tipo = común_1.LengthUsage.Porcentaje;
                romper;
            caso "auto": devolver "auto";
        }
        devolver xml_parser_1.default.lengthAttr(c, attr, tipo);
    }
    valor estáticoDeMargen(c) {
        devolver xml_parser_1.default.lengthAttr(c, "w");
    }
    valor estáticoDeBorde(c) {
        var tipo = xml_parser_1.default.attr(c, "val");
        si (tipo == "nil")
            devuelve "ninguno";
        var color = xmlUtil.colorAttr(c, "color");
        var tamaño = xml_parser_1.default.lengthAttr(c, "tamaño", common_1.LengthUsage.Border);
        devuelve `${tamaño} sólido ${color == "auto" ?exports.autos.borderColor : color}`;
    }
    valor estáticoOfTblLayout(c) {
        var tipo = xml_parser_1.default.attr(c, "val");
        tipo de retorno == "fijo" ? "fijo" : "automático";
    }
    clase estáticaNameOfCnfStyle(c) {
        constante val = xml_parser_1.default.attr(c, "val");
        clases constantes = [
            'primera fila', 'última fila', 'primera columna', 'última columna',
            'columna impar', 'columna par', 'fila impar', 'fila par',
            'célula ne', 'célula nw', 'célula se', 'célula sw'
        ];
        devolver clases.filter((_, i) => val[i] == '1').join(' ');
    }
    valor estáticoDeJc(c) {
        var tipo = xml_parser_1.default.attr(c, "val");
        interruptor (tipo) {
            caso "inicio":
            caso "izquierda": devolver "izquierda";
            caso "centro": devolver "centro";
            caso "fin":
            caso "derecho": devolver "derecho";
            caso "ambos": devolver "justificar";
        }
        tipo de retorno;
    }
    valor estáticoDeVertAlign(c, asTagName = falso) {
        var tipo = xml_parser_1.default.attr(c, "val");
        interruptor (tipo) {
            caso "subíndice": devolver "sub";
            caso "superíndice": devolver comoTagName ? "sup" : "super";
        }
        devolver comoTagName ? null : tipo;
    }
    valor estáticoDeAlineaciónDeTexto(c) {
        var tipo = xml_parser_1.default.attr(c, "val");
        interruptor (tipo) {
            caso "auto":
            caso "línea base": devolver "línea base";
            caso "arriba": devolver "arriba";
            caso "centro": devolver "medio";
            caso "abajo": devolver "abajo";
        }
        tipo de retorno;
    }
    estática addSize(a, b) {
        si (a == nulo)
            devolver b;
        si (b == nulo)
            devolver un;
        devuelve `calc(${a} + ${b})`;
    }
    clase estáticaNameOftblLook(c) {
        constante val = xml_parser_1.default.hexAttr(c, "val", 0);
        deje que className = "";
        si (xml_parser_1.default.boolAttr(c, "primeraFila") || (val & 0x0020))
            className += "primera fila";
        si (xml_parser_1.default.boolAttr(c, "lastRow") || (val & 0x0040))
            className += " última-fila";
        si (xml_parser_1.default.boolAttr(c, "primeraColumna") || (val & 0x0080))
            nombreClase += "primera-columna";
        si (xml_parser_1.default.boolAttr(c, "últimaColumna") || (val & 0x0100))
            nombreClase += " última-col";
        si (xml_parser_1.default.boolAttr(c, "noHBand") || (val & 0x0200))
            nombreClase += "no-hband";
        si (xml_parser_1.default.boolAttr(c, "noVBand") || (val & 0x0400))
            nombreClase += "no-vband";
        devolver nombreClase.trim();
    }
}


/***/ }),

/***/ "./src/document-props/core-props-part.ts":
/*!************************************************!*\
  !*** ./src/document-props/core-props-part.ts ***!
  \************************************************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones, __paquete_web_require__) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exportaciones.CorePropsPart = void 0;
constante parte_1 = __webpack_require__(/*! ../common/part */ "./src/common/part.ts");
constante core_props_1 = __webpack_require__(/*! ./core-props */ "./src/document-props/core-props.ts");
clase CorePropsPart extiende part_1.Part {
    parseXml(raíz) {
        esto.props = (0, core_props_1.parseCoreProps)(raíz, esto._package.xmlParser);
    }
}
exportaciones.CorePropsPart = CorePropsPart;


/***/ }),

/***/ "./src/document-props/core-props.ts":
/*!******************************************!*\
  !*** ./src/document-props/core-props.ts ***!
  \******************************************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exportaciones.parseCoreProps = void 0;
función parseCoreProps(root, xmlParser) {
    const resultado = {};
    para (sea el de xmlParser.elements(root)) {
        cambiar (el.nombrelocal) {
            caso "título":
                resultado.titulo = el.textContent;
                romper;
            caso "descripción":
                resultado.descripción = el.textContent;
                romper;
            caso "sujeto":
                resultado.asunto = el.textContent;
                romper;
            caso "creador":
                resultado.creador = el.textContent;
                romper;
            caso "palabras clave":
                resultado.palabrasclave = el.textContent;
                romper;
            caso "idioma":
                resultado.idioma = el.textContent;
                romper;
            caso "lastModifiedBy":
                resultado.lastModifiedBy = el.textContent;
                romper;
            caso "revisión":
                el.textContent && (resultado.revision = parseInt(el.textContent));
                romper;
        }
    }
    devolver resultado;
}
exportaciones.parseCoreProps = parseCoreProps;


/***/ }),

/***/ "./src/document-props/custom-props-part.ts":
/*!****************************************************!*\
  !*** ./src/document-props/custom-props-part.ts ***!
  \*************************************************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones, __paquete_web_require__) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exportaciones.CustomPropsPart = void 0;
constante parte_1 = __webpack_require__(/*! ../common/part */ "./src/common/part.ts");
constante custom_props_1 = __webpack_require__(/*! ./custom-props */ "./src/document-props/custom-props.ts");
clase CustomPropsPart extiende part_1.Part {
    parseXml(raíz) {
        esto.props = (0, custom_props_1.parseCustomProps)(raíz, esto._package.xmlParser);
    }
}
exportaciones.CustomPropsPart = CustomPropsPart;


/***/ }),

/***/ "./src/document-props/custom-props.ts":
/*!***********************************************!*\
  !*** ./src/document-props/custom-props.ts ***!
  \********************************************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exportaciones.parseCustomProps = void 0;
función parseCustomProps(root, xml) {
    devolver xml.elements(root, "propiedad").map(e => {
        const primerHijo = e.primerHijo;
        devolver {
            formatId: xml.attr(e, "fmtid"),
            nombre: xml.attr(e, "nombre"),
            tipo: firstChild.nodeName,
            valor: firstChild.textContent
        };
    });
}
exportaciones.parseCustomProps = parseCustomProps;


/***/ }),

/***/ "./src/document-props/extended-props-part.ts":
/*!***************************************************!*\
  !*** ./src/document-props/extended-props-part.ts ***!
  \***************************************************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones, __paquete_web_require__) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exportaciones.ExtendedPropsPart = void 0;
constante parte_1 = __webpack_require__(/*! ../common/part */ "./src/common/part.ts");
constante extendida_props_1 = __webpack_require__(/*! ./props-extendidos */ "./src/document-props/props-extendidos.ts");
clase ExtendedPropsPart extiende part_1.Part {
    parseXml(raíz) {
        esto.props = (0, extended_props_1.parseExtendedProps)(raíz, esto._package.xmlParser);
    }
}
exportaciones.ExtendedPropsPart = ExtendedPropsPart;


/***/ }),

/***/ "./src/document-props/extended-props.ts":
/*!*************************************************!*\
  !*** ./src/document-props/extended-props.ts ***!
  \**********************************************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exportaciones.parseExtendedProps = void 0;
función parseExtendedProps(root, xmlParser) {
    const resultado = {};
    para (sea el de xmlParser.elements(root)) {
        cambiar (el.nombrelocal) {
            caso "Plantilla":
                resultado.plantilla = el.textContent;
                romper;
            caso "Páginas":
                resultado.pages = safeParseToInt(el.textContent);
                romper;
            caso "Palabras":
                resultado.palabras = safeParseToInt(el.textContent);
                romper;
            caso "Personajes":
                resultado.caracteres = safeParseToInt(el.textContent);
                romper;
            caso "Aplicación":
                resultado.aplicacion = el.textContent;
                romper;
            caso "Líneas":
                resultado.lines = safeParseToInt(el.textContent);
                romper;
            caso "Párrafos":
                resultado.párrafos = safeParseToInt(el.textContent);
                romper;
            caso "Empresa":
                resultado.empresa = el.textContent;
                romper;
            caso "Versión de la aplicación":
                resultado.appVersion = el.textContent;
                romper;
        }
    }
    devolver resultado;
}
exportaciones.parseExtendedProps = parseExtendedProps;
función safeParseToInt(valor) {
    si (tipo de valor === 'indefinido')
        devolver;
    devolver parseInt(valor);
}


/***/ }),

/***/ "./src/documento/marcadores.ts":
/*!**************************************!*\
  !*** ./src/document/bookmarks.ts ***!
  \***********************************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones, __paquete_web_require__) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exports.parseBookmarkEnd = exports.parseBookmarkStart = void 0;
constante dom_1 = __webpack_require__(/*! ./dom */ "./src/document/dom.ts");
función parseBookmarkStart(elem, xml) {
    devolver {
        tipo: dom_1.DomType.BookmarkStart,
        id: xml.attr(elem, "id"),
        nombre: xml.attr(elem, "nombre"),
        colFirst: xml.intAttr(elem, "colFirst"),
        colÚltimo: xml.intAttr(elem, "colÚltimo")
    };
}
exports.parseBookmarkStart = parseBookmarkStart;
función parseBookmarkEnd(elem, xml) {
    devolver {
        tipo: dom_1.DomType.BookmarkEnd,
        id: xml.attr(elem, "id")
    };
}
exports.parseBookmarkEnd = parseBookmarkEnd;


/***/ }),

/***/ "./src/documento/border.ts":
/*!********************************!*\
  !*** ./src/document/border.ts ***!
  \********************************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones, __paquete_web_require__) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exports.parseBorders = exports.parseBorder = void 0;
constante común_1 = __webpack_require__(/*! ./common */ "./src/document/common.ts");
función parseBorder(elem, xml) {
    devolver {
        tipo: xml.attr(elem, "val"),
        color: xml.attr(elem, "color"),
        tamaño: xml.lengthAttr(elem, "tamaño", common_1.LengthUsage.Border),
        desplazamiento: xml.lengthAttr(elem, "espacio", common_1.LengthUsage.Point),
        marco: xml.boolAttr(elem, 'marco'),
        sombra: xml.boolAttr(elem, 'sombra')
    };
}
exportaciones.parseBorder = parseBorder;
función parseBorders(elem, xml) {
    var resultado = {};
    para (sea e de xml.elements(elem)) {
        cambiar (e.nombrelocal) {
            caso "izquierda":
                resultado.izquierda = parseBorder(e, xml);
                romper;
            caso "superior":
                resultado.top = parseBorder(e, xml);
                romper;
            caso "derecho":
                resultado.derecho = parseBorder(e, xml);
                romper;
            caso "abajo":
                resultado.bottom = parseBorder(e, xml);
                romper;
        }
    }
    devolver resultado;
}
exports.parseBorders = parseBorders;


/***/ }),

/***/ "./src/documento/common.ts":
/*!********************************!*\
  !*** ./src/document/common.ts ***!
  \********************************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exportaciones.parseCommonProperty = exportaciones.convertPercentage = exportaciones.convertBoolean = exportaciones.convertLength = exportaciones.LengthUsage = exportaciones.ns = void 0;
exportaciones.ns = {
    wordml: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
    dibujoml: "http://schemas.openxmlformats.org/drawingml/2006/main",
    imagen: "http://schemas.openxmlformats.org/drawingml/2006/picture",
    compatibilidad: "http://schemas.openxmlformats.org/markup-compatibility/2006",
    matemáticas: "http://schemas.openxmlformats.org/officeDocument/2006/math"
};
exportaciones.LengthUsage = {
    Dxa: { mul: 0.05, unidad: "pt" },
    Emú: { mul: 1/12700, unidad: "pt" },
    Tamaño de fuente: {mul: 0,5, unidad: "pt" },
    Borde: { mul: 0.125, unidad: "pt" },
    Punto: { mul: 1, unidad: "pt" },
    Porcentaje: { mul: 0.02, unidad: "%" },
    Altura de línea: { mul: 1 / 240, unidad: "" },
    VmlEmu: {mul: 1/12700, unidad: "" },
};
función convertLength(val, uso = exportaciones.LengthUsage.Dxa) {
    si (val == nulo || /.+(p[xt]|[%])$/.test(val)) {
        devolver val;
    }
    devuelve `${(parseInt(val) * uso.mul).toFixed(2)}${uso.unidad}`;
}
exportaciones.convertLength = convertLength;
función convertBoolean(v, valor predeterminado = falso) {
    cambiar (v) {
        caso "1": devuelve verdadero;
        caso "0": devuelve falso;
        caso "on": devuelve verdadero;
        caso "off": devolver falso;
        caso "verdadero": devuelve verdadero;
        caso "falso": devolver falso;
        predeterminado: devolver valor predeterminado;
    }
}
exportaciones.convertBoolean = convertBoolean;
función convertirPorcentaje(val) {
    valor de retorno? parseInt(val) / 100: nulo;
}
exportaciones.convertirPorcentaje = convertirPorcentaje;
función parseCommonProperty(elem, props, xml) {
    si (elem.namespaceURI != exportaciones.ns.wordml)
        devuelve falso;
    cambiar (elem.nombrelocal) {
        caso "color":
            props.color = xml.attr(elem, "val");
            romper;
        caso "sz":
            props.fontSize = xml.lengthAttr(elem, "val", exportaciones.LengthUsage.FontSize);
            romper;
        por defecto:
            devuelve falso;
    }
    devuelve verdadero;
}
exportaciones.parseCommonProperty = parseCommonProperty;


/***/ }),

/***/ "./src/documento/documento-parte.ts":
/*!***************************************!*\
  !*** ./src/documento/documento-part.ts ***!
  \***************************************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones, __paquete_web_require__) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exportaciones.DocumentPart = void 0;
constante parte_1 = __webpack_require__(/*! ../common/part */ "./src/common/part.ts");
clase DocumentPart extiende part_1.Part {
    constructor(pkg, ruta, analizador) {
        super(pkg, ruta);
        this._documentParser = analizador;
    }
    parseXml(raíz) {
        este.cuerpo = este._documentParser.parseDocumentFile(raíz);
    }
}
exportaciones.DocumentPart = DocumentPart;


/***/ }),

/***/ "./src/documento/dom.ts":
/*!*****************************!*\
  !*** ./src/documento/dom.ts ***!
  \*****************************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exportaciones.DomType = void 0;
varDomType;
(función (DomType) {
    DomType["Documento"] = "documento";
    DomType["Párrafo"] = "párrafo";
    DomType["Ejecutar"] = "ejecutar";
    DomType["Break"] = "ruptura";
    DomType["NoBreakHyphen"] = "sinBreakHyphen";
    DomType["Tabla"] = "tabla";
    DomType["Row"] = "fila";
    DomType["Celda"] = "celda";
    DomType["Hipervínculo"] = "hipervínculo";
    DomType["Dibujo"] = "dibujo";
    DomType["Imagen"] = "imagen";
    DomType["Texto"] = "texto";
    DomType["Tab"] = "pestaña";
    DomType["Símbolo"] = "símbolo";
    DomType["BookmarkStart"] = "bookmarkStart";
    DomType["Fin del marcador"] = "Fin del marcador";
    DomType["Pie de página"] = "pie de página";
    DomType["Encabezado"] = "encabezado";
    DomType["FootnoteReference"] = "referencia de nota al pie";
    DomType["EndnoteReference"] = "endnoteReference";
    DomType["Footnote"] = "nota al pie";
    DomType["Endnote"] = "nota final";
    DomType["CampoSimple"] = "CampoSimple";
    DomType["CampoComplejo"] = "CampoComplejo";
    DomType["Instrucción"] = "instrucción";
    DomType["VmlPicture"] = "vmlPicture";
    DomType["MmlMath"] = "mmlMath";
    DomType["MmlMathParagraph"] = "mmlMathParagraph";
    DomType["MmlFracción"] = "mmlFracción";
    DomType["MmlNumerator"] = "mmlNumerator";
    DomType["MmlDenominador"] = "mmlDenominador";
    DomType["MmlRadical"] = "mmlRadical";
    DomType["MmlBase"] = "mmlBase";
    DomType["MmlDegree"] = "mmlDegree";
    DomType["MmlSuperscript"] = "mmlSuperscript";
    DomType["MmlSubscript"] = "mmlSubscript";
    DomType["MmlSubArgumento"] = "mmlSubArgumento";
    DomType["MmlSuperArgumento"] = "mmlSuperArgumento";
    DomType["MmlNary"] = "mmlNary";
    DomType["MmlDelimiter"] = "mmlDelimiter";
    DomType["MmlRun"] = "mmlRun";
    DomType["VmlElement"] = "vmlElement";
    DomType["Insertado"] = "insertado";
    DomType["Eliminado"] = "eliminado";
    DomType["TextoEliminado"] = "TextoEliminado";
})(DomType = exportaciones.DomType || (exportaciones.DomType = {}));


/***/ }),

/***/ "./src/document/line-spacing.ts":
/*!*****************************************!*\
  !*** ./src/document/line-spacing.ts ***!
  \**************************************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exportaciones.parseLineSpacing = void 0;
función parseLineSpacing(elem, xml) {
    devolver {
        antes: xml.lengthAttr(elem, "antes"),
        después: xml.lengthAttr(elem, "después"),
        línea: xml.intAttr(elem, "línea"),
        reglaDeLínea: xml.attr(elem, "reglaDeLínea")
    };
}
exportaciones.parseLineSpacing = parseLineSpacing;


/***/ }),

/***/ "./src/documento/párrafo.ts":
/*!**************************************!*\
  !*** ./src/documento/párrafo.ts ***!
  \***********************************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones, __paquete_web_require__) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exportaciones.parseNumbering = exportaciones.parseTabs = exportaciones.parseParagraphProperty = exportaciones.parseParagraphProperties = void 0;
constante común_1 = __webpack_require__(/*! ./common */ "./src/document/common.ts");
constante sección_1 = __webpack_require__(/*! ./sección */ "./src/documento/sección.ts");
constante espaciado_de_línea_1 = __webpack_require__(/*! ./espaciado-de-línea */ "./src/document/espaciado-de-línea.ts");
constante run_1 = __webpack_require__(/*! ./run */ "./src/document/run.ts");
función parseParagraphProperties(elem, xml) {
    deje que el resultado sea {};
    para (sea el de xml.elements(elem)) {
        parseParagraphProperty(el, resultado, xml);
    }
    devolver resultado;
}
exports.parseParagraphProperties = parseParagraphProperties;
función parseParagraphProperty(elem, props, xml) {
    si (elem.namespaceURI != common_1.ns.wordml)
        devuelve falso;
    si ((0, common_1.parseCommonProperty)(elem, props, xml))
        devuelve verdadero;
    cambiar (elem.nombrelocal) {
        caso "pestañas":
            props.tabs = parseTabs(elem, xml);
            romper;
        caso "sectPr":
            props.sectionProps = (0, sección_1.parseSectionProperties)(elem, xml);
            romper;
        caso "numPr":
            props.numeracion = parseNumbering(elem, xml);
            romper;
        caso "espaciado":
            props.lineSpacing = (0, espaciado_de_línea_1.parseLineSpacing)(elem, xml);
            devuelve falso;
            romper;
        caso "textAlignment":
            props.textAlignment = xml.attr(elem, "val");
            devuelve falso;
            romper;
        caso "keepNext":
            props.keepLines = xml.boolAttr(elem, "val", verdadero);
            romper;
        caso "keepNext":
            props.keepNext = xml.boolAttr(elem, "val", verdadero);
            romper;
        caso "pageBreakBefore":
            props.pageBreakBefore = xml.boolAttr(elem, "val", verdadero);
            romper;
        caso "outlineLvl":
            props.outlineLevel = xml.intAttr(elem, "val");
            romper;
        caso "pStyle":
            props.styleName = xml.attr(elem, "val");
            romper;
        caso "rPr":
            props.runProps = (0, run_1.parseRunProperties)(elem, xml);
            romper;
        por defecto:
            devuelve falso;
    }
    devuelve verdadero;
}
exports.parseParagraphProperty = parseParagraphProperty;
función parseTabs(elem, xml) {
    devolver xml.elements(elem, "tab")
        .map(e => ({
        posición: xml.lengthAttr(e, "pos"),
        líder: xml.attr(e, "líder"),
        estilo: xml.attr(e, "val")
    }));
}
exportaciones.parseTabs = parseTabs;
función parseNumbering(elem, xml) {
    var resultado = {};
    para (sea e de xml.elements(elem)) {
        cambiar (e.nombrelocal) {
            caso "numId":
                resultado.id = xml.attr(e, "val");
                romper;
            caso "ilvl":
                resultado.nivel = xml.intAttr(e, "val");
                romper;
        }
    }
    devolver resultado;
}
exportaciones.parseNumbering = parseNumbering;


/***/ }),

/***/ "./src/documento/run.ts":
/*!*****************************!*\
  !*** ./src/document/run.ts ***!
  \*****************************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones, __paquete_web_require__) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exportaciones.parseRunProperty = exportaciones.parseRunProperties = void 0;
constante común_1 = __webpack_require__(/*! ./common */ "./src/document/common.ts");
función parseRunProperties(elem, xml) {
    deje que el resultado sea {};
    para (sea el de xml.elements(elem)) {
        parseRunProperty(el, resultado, xml);
    }
    devolver resultado;
}
exportaciones.parseRunProperties = parseRunProperties;
función parseRunProperty(elem, props, xml) {
    si ((0, common_1.parseCommonProperty)(elem, props, xml))
        devuelve verdadero;
    devuelve falso;
}
exportaciones.parseRunProperty = parseRunProperty;


/***/ }),

/***/ "./src/documento/sección.ts":
/*!*********************************!*\
  !*** ./src/documento/seccion.ts ***!
  \*********************************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones, __paquete_web_require__) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exportaciones.parseSectionProperties = exportaciones.SectionType = void 0;
constante xml_parser_1 = __webpack_require__(/*! ../parser/xml-parser */ "./src/parser/xml-parser.ts");
constante border_1 = __webpack_require__(/*! ./border */ "./src/document/border.ts");
var TipoDeSección;
(función (TipoDeSección) {
    SectionType["Continuous"] = "continuo";
    SectionType["NextPage"] = "próximaPágina";
    SectionType["SiguienteColumna"] = "siguienteColumna";
    SectionType["EvenPage"] = "evenPage";
    SectionType["OddPage"] = "oddPage";
})(SectionType = exportaciones.SectionType || (exportaciones.SectionType = {}));
función parseSectionProperties(elem, xml = xml_parser_1.default) {
    var _a, _b;
    var sección = {};
    para (sea e de xml.elements(elem)) {
        cambiar (e.nombrelocal) {
            caso "pgSz":
                sección.pageSize = {
                    ancho: xml.lengthAttr(e, "w"),
                    altura: xml.lengthAttr(e, "h"),
                    orientación: xml.attr(e, "orientar")
                };
                romper;
            caso "tipo":
                sección.tipo = xml.attr(e, "val");
                romper;
            caso "pgMar":
                sección.pageMargins = {
                    izquierda: xml.lengthAttr(e, "izquierda"),
                    derecha: xml.lengthAttr(e, "derecha"),
                    superior: xml.lengthAttr(e, "superior"),
                    inferior: xml.lengthAttr(e, "inferior"),
                    encabezado: xml.lengthAttr(e, "encabezado"),
                    pie de página: xml.lengthAttr(e, "pie de página"),
                    canal: xml.lengthAttr(e, "canal"),
                };
                romper;
            caso "cols":
                sección.columnas = parseColumns(e, xml);
                romper;
            caso "headerReference":
                ((_a = sección.headerRefs) !== null && _a !== void 0 ? _a : (sección.headerRefs = [])).push(parseFooterHeaderReference(e, xml));
                romper;
            caso "footerReference":
                ((_b = sección.footerRefs) !== null && _b !== void 0 ? _b : (sección.footerRefs = [])).push(parseFooterHeaderReference(e, xml));
                romper;
            caso "titlePg":
                sección.titlePage = xml.boolAttr(e, "val", true);
                romper;
            caso "pgBorders":
                sección.pageBorders = (0, border_1.parseBorders)(e, xml);
                romper;
            caso "pgNumType":
                sección.pageNumber = parsePageNumber(e, xml);
                romper;
        }
    }
    sección de retorno;
}
exportaciones.parseSectionProperties = parseSectionProperties;
función parseColumns(elem, xml) {
    devolver {
        númeroDeColumnas: xml.intAttr(elem, "num"),
        espacio: xml.lengthAttr(elem, "espacio"),
        separador: xml.boolAttr(elem, "sep"),
        igualAncho: xml.boolAttr(elem, "igualAncho", verdadero),
        columnas: xml.elements(elem, "col")
            .map(e => ({
            ancho: xml.lengthAttr(e, "w"),
            espacio: xml.lengthAttr(e, "espacio")
        }))
    };
}
función parsePageNumber(elem, xml) {
    devolver {
        capSep: xml.attr(elem, "chapSep"),
        estiloChap: xml.attr(elem, "estiloChap"),
        formato: xml.attr(elem, "fmt"),
        inicio: xml.intAttr(elem, "inicio")
    };
}
función parseFooterHeaderReference(elem, xml) {
    devolver {
        id: xml.attr(elem, "id"),
        tipo: xml.attr(elem, "tipo"),
    };
}


/***/ }),

/***/ "./src/docx-preview.ts":
/*!*****************************!*\
  !*** ./src/docx-preview.ts ***!
  \*****************************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones, __paquete_web_require__) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exportaciones.renderAsync = exportaciones.praseAsync = exportaciones.defaultOptions = void 0;
constante word_document_1 = __webpack_require__(/*! ./word-document */ "./src/word-document.ts");
constante document_parser_1 = __webpack_require__(/*! ./document-parser */ "./src/document-parser.ts");
constante html_renderer_1 = __webpack_require__(/*! ./html-renderer */ "./src/html-renderer.ts");
exportaciones.defaultOptions = {
    ignoreHeight: falso,
    ignoreWidth: falso,
    ignoreFonts: falso,
    breakPages: verdadero,
    depuración: falso,
    experimental: falso,
    nombreDeClase: "docx",
    inWrapper: verdadero,
    trimXmlDeclaration: verdadero,
    ignoreLastRenderedPageBreak: verdadero,
    renderHeaders: verdadero,
    renderFooters: verdadero,
    renderFootnotes: verdadero,
    renderEndnotes: verdadero,
    useBase64URL: falso,
    useMathMLPolyfill: falso,
    renderChanges: falso
};
función praseAsync(datos, opcionesDeUsuario = null) {
    const ops = Object.assign(Object.assign({}, exportaciones.opcionespredeterminadas), opcionesdelusuario);
    devolver palabra_documento_1.WordDocument.load(datos, nuevo documento_analizador_1.DocumentParser(ops), ops);
}
exportaciones.praseAsync = praseAsync;
función renderAsync(datos, bodyContainer, styleContainer = null, userOptions = null) {
    const ops = Object.assign(Object.assign({}, exportaciones.opcionespredeterminadas), opcionesdelusuario);
    const renderer = new html_renderer_1.HtmlRenderer(ventana.documento);
    devolver word_document_1.WordDocument
        .load(datos, nuevo document_parser_1.DocumentParser(ops), ops)
        .entonces(doc => {
        renderer.render(doc, contenedorCuerpo, contenedorEstilo, ops);
        devolver documento;
    });
}
exportaciones.renderAsync = renderAsync;


/***/ }),

/***/ "./src/font-table/font-table.ts":
/*!*****************************************!*\
  !*** ./src/font-table/font-table.ts ***!
  \**************************************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones, __paquete_web_require__) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exportaciones.FontTablePart = void 0;
constante parte_1 = __webpack_require__(/*! ../common/part */ "./src/common/part.ts");
constante fonts_1 = __webpack_require__(/*! ./fonts */ "./src/font-table/fonts.ts");
clase FontTablePart extiende part_1.Part {
    parseXml(raíz) {
        esto.fonts = (0, fonts_1.parseFonts)(raíz, esto._package.xmlParser);
    }
}
exportaciones.FontTablePart = FontTablePart;


/***/ }),

/***/ "./src/font-table/fonts.ts":
/*!*********************************!*\
  !*** ./src/font-table/fonts.ts ***!
  \*********************************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exportaciones.parseEmbedFontRef = exportaciones.parseFont = exportaciones.parseFonts = void 0;
constante embedFontTypeMap = {
    embedRegular: 'regular',
    embedBold: 'negrita',
    embedItalic: 'cursiva',
    incrustarBoldItalic: 'negritaItalic',
};
función parseFonts(root, xml) {
    devolver xml.elements(root).map(el => parseFont(el, xml));
}
exportaciones.parseFonts = parseFonts;
función parseFont(elem, xml) {
    deje que el resultado sea {
        nombre: xml.attr(elem, "nombre"),
        embedFontRefs: []
    };
    para (sea el de xml.elements(elem)) {
        cambiar (el.nombrelocal) {
            caso "familia":
                resultado.familia = xml.attr(el, "val");
                romper;
            caso "altName":
                resultado.altName = xml.attr(el, "val");
                romper;
            caso "incrustarRegular":
            caso "incrustar en negrita":
            caso "incrustar en cursiva":
            caso "incrustar negrita cursiva":
                resultado.embedFontRefs.push(parseEmbedFontRef(el, xml));
                romper;
        }
    }
    devolver resultado;
}
exportaciones.parseFont = parseFont;
función parseEmbedFontRef(elem, xml) {
    devolver {
        id: xml.attr(elem, "id"),
        clave: xml.attr(elem, "fontKey"),
        tipo: embedFontTypeMap[elem.localName]
    };
}
exportaciones.parseEmbedFontRef = parseEmbedFontRef;


/***/ }),

/***/ "./src/encabezado-pie/elementos.ts":
/*!***************************************!*\
  !*** ./src/header-footer/elements.ts ***!
  \***************************************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones, __paquete_web_require__) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exportaciones.WmlFooter = exportaciones.WmlHeader = void 0;
constante dom_1 = __webpack_require__(/*! ../documento/dom */ "./src/documento/dom.ts");
clase WmlHeader {
    constructor() {
        este.tipo = dom_1.DomType.Header;
        esto.niños = [];
        este.cssStyle = {};
    }
}
exportaciones.WmlHeader = WmlHeader;
clase WmlFooter {
    constructor() {
        este.tipo = dom_1.DomType.Footer;
        esto.niños = [];
        este.cssStyle = {};
    }
}
exportaciones.WmlFooter = WmlFooter;


/***/ }),

/***/ "./src/encabezado-pie/partes.ts":
/*!************************************!*\
  !*** ./src/header-footer/parts.ts ***!
  \************************************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones, __paquete_web_require__) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exportaciones.FooterPart = exportaciones.HeaderPart = exportaciones.BaseHeaderFooterPart = void 0;
constante parte_1 = __webpack_require__(/*! ../common/part */ "./src/common/part.ts");
constante elementos_1 = __webpack_require__(/*! ./elementos */ "./src/header-footer/elementos.ts");
clase BaseHeaderFooterPart extiende part_1.Part {
    constructor(pkg, ruta, analizador) {
        super(pkg, ruta);
        this._documentParser = analizador;
    }
    parseXml(raíz) {
        este.rootElement = este.createRootElement();
        este.rootElement.children = este._documentParser.parseBodyElements(root);
    }
}
exportaciones.BaseHeaderFooterPart = BaseHeaderFooterPart;
clase HeaderPart extiende BaseHeaderFooterPart {
    crearElementoRaíz() {
        devolver nuevos elementos_1.WmlHeader();
    }
}
exportaciones.HeaderPart = HeaderPart;
clase FooterPart extiende BaseHeaderFooterPart {
    crearElementoRaíz() {
        devolver nuevos elementos_1.WmlFooter();
    }
}
exportaciones.FooterPart = FooterPart;


/***/ }),

/***/ "./src/html-renderer.ts":
/*!******************************!*\
  !*** ./src/html-renderer.ts ***!
  \******************************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones, __paquete_web_require__) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exportaciones.HtmlRenderer = void 0;
constante dom_1 = __webpack_require__(/*! ./documento/dom */ "./src/documento/dom.ts");
constante utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
constante javascript_1 = __webpack_require__(/*! ./javascript */ "./src/javascript.ts");
constante mathml_scss_1 = __webpack_require__(/*! ./mathml.scss */ "./src/mathml.scss");
constante ns = {
    svg: "http://www.w3.org/2000/svg",
    matemáticasML: "http://www.w3.org/1998/Math/MathML"
};
clase HtmlRenderer {
    constructor(documentohtml) {
        este.htmlDocument = htmlDocument;
        este.className = "docx";
        este.styleMap = {};
        esto.currentPart = null;
        esto.tableVerticalMerges = [];
        esto.currentVerticalMerge = null;
        esto.tableCellPositions = [];
        esto.currentCellPosition = null;
        este.footnoteMap = {};
        este.endnoteMap = {};
        este.currentEndnoteIds = [];
        esto.usedHederFooterParts = [];
        esto.currentTabs = [];
        este.tabsTimeout = 0;
        este.createElement = createElement;
    }
    render(documento, bodyContainer, styleContainer = null, opciones) {
        var _a;
        este.documento = documento;
        esto.opciones = opciones;
        este.className = opciones.className;
        este.rootSelector = opciones.inWrapper ? `.${this.className}-wrapper` : ':root';
        este.styleMap = null;
        estiloContenedor = estiloContenedor || cuerpoContenedor;
        eliminarTodosLosElementos(styleContainer);
        eliminarTodosLosElementos(cuerpoContenedor);
        appendComment(styleContainer, "estilos predefinidos de la biblioteca docxjs");
        styleContainer.appendChild(este.renderDefaultStyle());
        si (!ventana.MathMLElement && opciones.useMathMLPolyfill) {
            appendComment(styleContainer, "estilos polyfill docxjs mathml");
            styleContainer.appendChild(createStyleElement(mathml_scss_1.default));
        }
        si (documento.temaParte) {
            appendComment(styleContainer, "valores del tema del documento docxjs");
            este.renderTheme(documento.themePart, styleContainer);
        }
        si (documento.stylesPart != null) {
            este.styleMap = este.processStyles(document.stylesPart.styles);
            appendComment(styleContainer, "estilos de documentos docxjs");
            styleContainer.appendChild(this.renderStyles(document.stylesPart.styles));
        }
        si (documento.numeracionParte) {
            este.prodessNumberings(documento.numberingPart.domNumberings);
            appendComment(styleContainer, "estilos de numeración de documentos docxjs");
            styleContainer.appendChild(this.renderNumbering(document.numberingPart.domNumberings, styleContainer));
        }
        si (documento.footnotesPart) {
            este.footnoteMap = (0, utils_1.keyBy)(document.footnotesPart.notes, x => x.id);
        }
        si (documento.endnotesPart) {
            este.endnoteMap = (0, utils_1.keyBy)(document.endnotesPart.notes, x => x.id);
        }
        si (documento.settingsPart) {
            este.defaultTabSize = (_a = document.settingsPart.settings) === null || _a === void 0 ? void 0 : _a.defaultTabStop;
        }
        si (!opciones.ignoreFonts && documento.fontTablePart)
            this.renderFontTable(document.fontTablePart, styleContainer);
        var sectionElements = this.renderSections(documento.documentPart.body);
        si (este.opciones.inWrapper) {
            bodyContainer.appendChild(this.renderWrapper(secciónElementos));
        }
        demás {
            appendChildren(cuerpoContenedor, secciónElementos);
        }
        esto.refreshTabStops();
    }
    renderTheme(parte del tema, contenedor de estilo) {
        var _a, _b;
        variables constantes = {};
        const fontScheme = (_a = themePart.theme) === null || _a === void 0 ? void 0 : _a.fontScheme;
        si (fontScheme) {
            si (fontScheme.majorFont) {
                variables['--docx-majorHAnsi-font'] = fontScheme.majorFont.latinTypeface;
            }
            si (fontScheme.minorFont) {
                variables['--docx-minorHAnsi-font'] = fontScheme.minorFont.latinTypeface;
            }
        }
        const colorScheme = (_b = themePart.theme) === null || _b === void 0 ? void 0 : _b.colorScheme;
        si (esquema de color) {
            para (sea [k, v] de Object.entries(colorScheme.colors)) {
                variables[`--docx-${k}-color`] = `#${v}`;
            }
        }
        const cssText = this.styleToString(`.${this.className}`, variables);
        styleContainer.appendChild(createStyleElement(cssText));
    }
    renderFontTable(fontsPart, styleContainer) {
        para (sea f de fontsPart.fonts) {
            para (dejar ref de f.embedFontRefs) {
                este.documento.loadFont(ref.id, ref.key).then(fontData => {
                    constante cssValues ​​= {
                        'familia-de-fuentes': f.nombre,
                        'src': `url(${fontData})`
                    };
                    si (ref.type == "negrita" || ref.type == "negrita cursiva") {
                        cssValues['font-weight'] = 'negrita';
                    }
                    si (ref.type == "cursiva" || ref.type == "negritaItalic") {
                        cssValues['font-style'] = 'cursiva';
                    }
                    appendComment(styleContainer, `fuente docxjs ${f.name}`);
                    constante cssText = this.styleToString("@font-face", cssValues);
                    styleContainer.appendChild(createStyleElement(cssText));
                    esto.refreshTabStops();
                });
            }
        }
    }
    processStyleName(nombre de clase) {
        devolver nombreDeClase ? `${this.nombreDeClase}_${(0, utils_1.escapeClassName)(nombreDeClase)}` : this.nombreDeClase;
    }
    processStyles(estilos) {
        constante stylesMap = (0, utils_1.keyBy)(styles.filter(x => x.id != null), x => x.id);
        para (const estilo de estilos.filter(x => x.basedOn)) {
            var baseStyle = stylesMap[estilo.basedOn];
            si (estilobase) {
                estilo.paragraphProps = (0, utils_1.mergeDeep)(estilo.paragraphProps, baseStyle.paragraphProps);
                estilo.runProps = (0, utils_1.mergeDeep)(estilo.runProps, baseStyle.runProps);
                para (const baseValues ​​de baseStyle.styles) {
                    const styleValues ​​= estilo.styles.find(x => x.target == baseValues.target);
                    si (valoresDeEstilo) {
                        esto.copyStyleProperties(baseValues.values, styleValues.values);
                    }
                    demás {
                        estilo.styles.push(Objeto.asignar(Objeto.asignar({}, baseValues), { valores: Objeto.asignar({}, baseValues.valores) }));
                    }
                }
            }
            de lo contrario si (este.opciones.debug)
                console.warn(`No se puede encontrar el estilo base ${style.basedOn}`);
        }
        para (dejar estilo de estilos) {
            estilo.cssName = this.processStyleName(estilo.id);
        }
        devolver estilosMapa;
    }
    prodessNumberings(numeraciones) {
        var _a;
        para (deje que núm de numeraciones.filter(n => n.pStyleName)) {
            constante estilo = this.findStyle(num.pStyleName);
            si ((_a = estilo === null || estilo === void 0 ? void 0 : estilo.paragraphProps) === null || _a === void 0 ? void 0 : _a.numbering) {
                estilo.párrafoProps.numeración.nivel = num.nivel;
            }
        }
    }
    processElement(elemento) {
        si (elemento.hijos) {
            para (var e de elemento.hijos) {
                e.parent = elemento;
                si (e.type == dom_1.DomType.Table) {
                    este.processTable(e);
                }
                demás {
                    este.processElement(e);
                }
            }
        }
    }
    procesarTabla(tabla) {
        para (var r de tabla.children) {
            para (var c de r.niños) {
                c.cssStyle = this.copyStyleProperties(tabla.cellStyle, c.cssStyle, [
                    "borde izquierdo", "borde derecho", "borde superior", "borde inferior",
                    "relleno izquierdo", "relleno derecho", "relleno superior", "relleno inferior"
                ]);
                este.processElement(c);
            }
        }
    }
    copyStyleProperties(entrada, salida, atributos = null) {
        si (!entrada)
            salida de retorno;
        si (salida == nulo)
            salida = {};
        si (atributos == nulo)
            atributos = Object.getOwnPropertyNames(entrada);
        para (var clave de atributos) {
            si (entrada.hasOwnProperty(clave) y !salida.hasOwnProperty(clave))
                salida[clave] = entrada[clave];
        }
        salida de retorno;
    }
    createSection(nombreClase, props) {
        var elem = this.createElement("sección", { className });
        si (props) {
            si (props.pageMargins) {
                elem.style.paddingLeft = props.pageMargins.left;
                elem.style.paddingRight = props.pageMargins.right;
                elem.style.paddingTop = props.pageMargins.top;
                elem.style.paddingBottom = props.pageMargins.bottom;
            }
            si (props.tamañopágina) {
                si (!this.opciones.ignorarAncho)
                    elem.style.width = props.pageSize.width;
                si (!this.opciones.ignorarAltura)
                    elem.style.minHeight = props.pageSize.height;
            }
            si (props.columnas && props.columnas.numeroDeColumnas) {
                elem.style.columnCount = `${props.columns.numberOfColumns}`;
                elem.style.columnGap = props.columns.space;
                si (props.columnas.separador) {
                    elem.style.columnRule = "1px negro sólido";
                }
            }
        }
        elemento de retorno;
    }
    renderSections(documento) {
        const resultado = [];
        este.processElement(documento);
        const secciones = this.splitBySection(documento.children);
        deje que prevProps = null;
        para (sea i = 0, l = secciones.longitud; i < l; i++) {
            este.currentFootnoteIds = [];
            const sección = secciones[i];
            const props = sección.sectProps || documento.props;
            const sectionElement = this.createSection(this.className, props);
            este.renderStyleValues(documento.cssStyle, secciónElement);
            esta.opciones.renderHeaders && esta.renderHeaderFooter(props.headerRefs, props, resultado.longitud, prevProps != props, sectionElement);
            var contentElement = this.createElement("artículo");
            this.renderElements(sección.elementos, elementoContenido);
            secciónElement.appendChild(contentElement);
            si (esto.opciones.renderFootnotes) {
                este.renderNotes(este.currentFootnoteIds, este.footnoteMap, sectionElement);
            }
            si (esto.opciones.renderEndnotes && i == l - 1) {
                este.renderNotes(este.currentEndnoteIds, este.endnoteMap, sectionElement);
            }
            esta.opciones.renderFooters && esta.renderHeaderFooter(props.footerRefs, props, resultado.longitud, prevProps != props, sectionElement);
            resultado.push(secciónElemento);
            prevProps = accesorios;
        }
        devolver resultado;
    }
    renderHeaderFooter(refs, propiedades, página, firstOfSection, into) {
        var _a, _b;
        si (!refs)
            devolver;
        var ref = (_b = (_a = (props.titlePage && firstOfSection ? refs.find(x => x.type == "first") : null)) !== null && _a !== void 0 ? _a : (page % 2 == 1 ? refs.find(x => x.type == "even") : null)) !== null && _b !== void 0 ? _b : refs.find(x => x.type == "default");
        var parte = ref && este.documento.findPartByRelId(ref.id, este.documento.documentPart);
        si (parte) {
            esto.currentPart = parte;
            si (!this.usedHederFooterParts.includes(parte.ruta)) {
                este.processElement(parte.rootElement);
                este.usedHederFooterParts.push(parte.ruta);
            }
            este.renderElements([part.rootElement], en);
            esto.currentPart = null;
        }
    }
    esPageBreakElement(elem) {
        si (elem.type != dom_1.DomType.Break)
            devuelve falso;
        si (elem.break == "lastRenderedPageBreak")
            devuelve !this.options.ignoreLastRenderedPageBreak;
        devolver elem.break == "pagina";
    }
    splitBySection(elementos) {
        var _a;
        var current = { sectProps: null, elementos: [] };
        var resultado = [actual];
        para (sea elem de elementos) {
            si (elem.type == dom_1.DomType.Paragraph) {
                const s = this.findStyle(elem.styleName);
                si ((_a = s === nulo || s === vacío 0 ? vacío 0 : s.paragraphProps) === nulo || _a === vacío 0 ? vacío 0 : _a.pageBreakBefore) {
                    actual.sectProps = sectProps;
                    actual = { sectProps: null, elementos: [] };
                    resultado.push(actual);
                }
            }
            actual.elementos.push(elem);
            si (elem.type == dom_1.DomType.Paragraph) {
                constante p = elem;
                var sectProps = p.sectionProps;
                var pBreakIndex = -1;
                var rBreakIndex = -1;
                si (este.opciones.breakPages && p.children) {
                    pBreakIndex = p.children.findIndex(r => {
                        var _a, _b;
                        rBreakIndex = (_b = (_a = r.children) === nulo || _a === vacío 0 ? vacío 0 : _a.findIndex(this.isPageBreakElement.bind(this))) !== nulo && _b !== vacío 0 ? _b : -1;
                        devuelve rBreakIndex != -1;
                    });
                }
                si (sectProps || pBreakIndex != -1) {
                    actual.sectProps = sectProps;
                    actual = { sectProps: null, elementos: [] };
                    resultado.push(actual);
                }
                si (pBreakIndex != -1) {
                    deje que breakRun = p.children[pBreakIndex];
                    deje que splitRun = rBreakIndex < breakRun.children.length - 1;
                    si (pBreakIndex < p.children.length - 1 || splitRun) {
                        var hijos = elem.hijos;
                        var newParagraph = Object.assign(Object.assign({}, elem), { hijos: hijos.slice(pBreakIndex) });
                        elem.hijos = hijos.slice(0, pBreakIndex);
                        current.elements.push(nuevoPárrafo);
                        si (splitRun) {
                            deje que runChildren = breakRun.children;
                            deje que newRun = Object.assign(Object.assign({}, breakRun), { hijos: runChildren.slice(0, rBreakIndex) });
                            elem.children.push(newRun);
                            breakRun.children = runChildren.slice(rBreakIndex);
                        }
                    }
                }
            }
        }
        deje que currentSectProps = null;
        para (sea i = resultado.longitud - 1; i >= 0; i--) {
            si (resultado[i].sectProps == null) {
                resultado[i].sectProps = currentSectProps;
            }
            demás {
                currentSectProps = resultado[i].sectProps;
            }
        }
        devolver resultado;
    }
    renderWrapper(hijos) {
        devuelve esto.createElement("div", { className: `${this.className}-wrapper` }, hijos);
    }
    renderDefaultStyle() {
        var c = este.nombreClase;
        var estiloTexto = `
.${c}-wrapper { fondo: gris; relleno: 30px; relleno inferior: 0px; pantalla: flex; flujo flexible: columna; alinear elementos: centro; }
.${c}-wrapper>sección.${c} { fondo: blanco; sombra de caja: 0 0 10px rgba(0, 0, 0, 0.5); margen inferior: 30px; }
.${c} { color: negro; }
sección.${c} { tamaño de caja: caja de borde; visualización: flex; flujo flexible: columna nowrap; posición: relativa; desbordamiento: oculto; }
sección.${c}>article { margin-bottom: auto; }
.${c} tabla { colapso-de-borde: colapso; }
.${c} tabla td, .${c} tabla th { alineación vertical: superior; }
.${c} p { margen: 0pt; altura mínima: 1em; }
.${c} span { espacio en blanco: pre-ajuste; ajuste de desbordamiento: salto de palabra; }
.${c} a { color: heredar; decoración de texto: heredar; }
`;
        devolver createStyleElement(styleText);
    }
    renderNumbering(numeraciones, styleContainer) {
        var estiloTexto = "";
        var rootCounters = [];
        para (var num de numeraciones) {
            var selector = `p.${this.numberingClass(num.id, num.level)}`;
            var listStyleType = "ninguno";
            si (num.bullet) {
                deje que valible = `--${this.className}-${num.bullet.src}`.toLowerCase();
                estiloTexto += este.styleToString(`${selector}:antes`, {
                    "contenido": "' '",
                    "display": "bloque en línea",
                    "antecedentes": `var(${valiable})`
                }, num.bullet.style);
                este.documento.loadNumberingImage(num.bullet.src).then(datos => {
                    var texto = `${this.rootSelector} { ${valiable}: url(${data}) }`;
                    styleContainer.appendChild(createStyleElement(texto));
                });
            }
            de lo contrario si (num.levelText) {
                deje que el contador = este.numberingCounter(num.id, num.level);
                si (num.nivel > 0) {
                    estiloTexto += este.styleToString(`p.${este.numberingClass(num.id, num.level - 1)}`, {
                        "reinicio del contador": contador
                    });
                }
                demás {
                    rootCounters.push(contador);
                }
                styleText += this.styleToString(`${selector}:before`, Object.assign({ "content": this.levelTextToContent(num.levelText, num.suff, num.id, this.numFormatToCssValue(num.format)), "counter-increment": counter }, num.rStyle));
            }
            demás {
                listStyleType = este.numFormatToCssValue(num.formato);
            }
            styleText += this.styleToString(selector, Object.assign({ "display": "elemento-de-lista", "posición-de-estilo-de-lista": "dentro", "tipo-de-estilo-de-lista": listStyleType }, num.pStyle));
        }
        si (rootCounters.length > 0) {
            estiloTexto += este.styleToString(este.rootSelector, {
                "reinicio del contador": rootCounters.join(" ")
            });
        }
        devolver createStyleElement(styleText);
    }
    renderStyles(estilos) {
        var _a;
        var estiloTexto = "";
        const estilosMap = este.estiloMap;
        constante defautStyles = (0, utils_1.keyBy)(estilos.filter(s => s.isDefault), s => s.target);
        para (estilo constante de estilos) {
            var subStyles = estilo.estilos;
            si (estilo.vinculado) {
                var linkedStyle = estilo.linked && stylesMap[estilo.linked];
                si (linkedStyle)
                    subEstilos = subEstilos.concat(linkedStyle.styles);
                de lo contrario si (este.opciones.debug)
                    console.warn(`No se puede encontrar el estilo vinculado ${style.linked}`);
            }
            para (const subStyle de subStyles) {
                var selector = `${(_a = estilo.objetivo) !== null && _a !== void 0 ? _a : ''}.${estilo.cssName}`;
                si (estilo.objetivo != subEstilo.objetivo)
                    selector += ` ${subStyle.target}`;
                if (estilospredeterminados[estilo.objetivo] == estilo)
                    selector = `.${this.className} ${style.target}, ` + selector;
                estiloTexto += this.styleToString(selector, subStyle.values);
            }
        }
        devolver createStyleElement(styleText);
    }
    renderNotes(noteIds, notesMap, into) {
        var notas = noteIds.map(id => notesMap[id]).filter(x => x);
        si (notas.longitud > 0) {
            var resultado = this.createElement("ol", null, this.renderElements(notas));
            en.appendChild(resultado);
        }
    }
    renderElement(elem) {
        interruptor (elem.type) {
            caso dom_1.DomType.Párrafo:
                devuelve esto.renderParagraph(elem);
            caso dom_1.DomType.BookmarkStart:
                devuelve esto.renderBookmarkStart(elem);
            caso dom_1.DomType.BookmarkEnd:
                devuelve nulo;
            caso dom_1.DomType.Run:
                devuelve esto.renderRun(elem);
            caso dom_1.DomType.Table:
                devuelve esto.renderTable(elem);
            caso dom_1.DomType.Row:
                devuelve esto.renderTableRow(elem);
            caso dom_1.DomType.Cell:
                devuelve esto.renderTableCell(elem);
            caso dom_1.DomType.Hipervínculo:
                devuelve esto.renderHyperlink(elem);
            caso dom_1.DomType.Drawing:
                devuelve esto.renderDrawing(elem);
            caso dom_1.DomType.Image:
                devuelve esto.renderImage(elem);
            caso dom_1.DomType.Texto:
                devuelve esto.renderText(elem);
            caso dom_1.DomType.Texto:
                devuelve esto.renderText(elem);
            caso dom_1.DomType.DeletedText:
                devuelve esto.renderDeletedText(elem);
            caso dom_1.DomType.Tab:
                devuelve esto.renderTab(elem);
            caso dom_1.DomType.Symbol:
                devuelve este.renderSymbol(elem);
            caso dom_1.DomType.Break:
                devuelve esto.renderBreak(elem);
            caso dom_1.DomType.Footer:
                devuelve este.renderContainer(elem, "pie de página");
            caso dom_1.DomType.Header:
                devuelve este.renderContainer(elem, "encabezado");
            caso dom_1.DomType.Nota al pie:
            caso dom_1.DomType.Nota final:
                devuelve este.renderContainer(elem, "li");
            caso dom_1.DomType.FootnoteReference:
                devuelve esto.renderFootnoteReference(elem);
            caso dom_1.DomType.EndnoteReference:
                devuelve esto.renderEndnoteReference(elem);
            caso dom_1.DomType.NoBreakHyphen:
                devuelve esto.createElement("wbr");
            caso dom_1.DomType.VmlPicture:
                devuelve esto.renderVmlPicture(elem);
            caso dom_1.DomType.VmlElement:
                devuelve esto.renderVmlElement(elem);
            caso dom_1.DomType.MmlMath:
                devuelve esto.renderContainerNS(elem, ns.mathML, "math", { xmlns: ns.mathML });
            caso dom_1.DomType.MmlMathParagraph:
                devuelve este.renderContainer(elem, "span");
            caso dom_1.DomType.MmlFraction:
                devuelve este.renderContainerNS(elem, ns.mathML, "mfrac");
            caso dom_1.DomType.MmlNumerator:
            caso dom_1.DomType.MmlDenominator:
                devuelve este.renderContainerNS(elem, ns.mathML, "mrow");
            caso dom_1.DomType.MmlRadical:
                devuelve esto.renderMmlRadical(elem);
            caso dom_1.DomType.MmlDegree:
                devuelve este.renderContainerNS(elem, ns.mathML, "mn");
            caso dom_1.DomType.MmlSuperscript:
                devuelve esto.renderContainerNS(elem, ns.mathML, "msup");
            caso dom_1.DomType.MmlSubscript:
                devuelve this.renderContainerNS(elem, ns.mathML, "msub");
            caso dom_1.DomType.MmlBase:
                devuelve este.renderContainerNS(elem, ns.mathML, "mrow");
            caso dom_1.DomType.MmlSuperArgument:
                devuelve este.renderContainerNS(elem, ns.mathML, "mn");
            caso dom_1.DomType.MmlSubArgument:
                devuelve este.renderContainerNS(elem, ns.mathML, "mn");
            caso dom_1.DomType.MmlDelimiter:
                devuelve esto.renderMmlDelimiter(elem);
            caso dom_1.DomType.MmlRun:
                devuelve esto.renderMmlRun(elem);
            caso dom_1.DomType.MmlNary:
                devuelve esto.renderMmlNary(elem);
            caso dom_1.DomType.Insertado:
                devuelve esto.renderInserted(elem);
            caso dom_1.DomType.Eliminado:
                devuelve esto.renderDeleted(elem);
        }
        devuelve nulo;
    }
    renderChildren(elem, en) {
        devuelve este.renderElements(elem.children, into);
    }
    renderElements(elems, en) {
        si (elems == null)
            devuelve nulo;
        var resultado = elems.flatMap(e => this.renderElement(e)).filter(e => e != null);
        si (en)
            appendChildren(en, resultado);
        devolver resultado;
    }
    renderContainer(elem, nombreDeEtiqueta, propiedades) {
        devuelve este.createElement(tagName, props, este.renderChildren(elem));
    }
    renderContainerNS(elem, ns, nombre de etiqueta, accesorios) {
        devolver createElementNS(ns, tagName, props, this.renderChildren(elem));
    }
    renderParagraph(elem) {
        var _a, _b, _c, _d;
        var resultado = this.createElement("p");
        constante estilo = this.findStyle(elem.styleName);
        (_a = elem.tabs) !== null && _a !== void 0 ? _a : (elem.tabs = (_b = estilo === null || estilo === void 0 ? void 0 : estilo.paragraphProps) === null || _b === void 0 ? void 0 : _b.tabs);
        este.renderClass(elem, resultado);
        este.renderChildren(elem, resultado);
        este.renderStyleValues(elem.cssStyle, resultado);
        esto.renderCommonProperties(resultado.estilo, elem);
        const numeración = (_c = elem.numbering) !== null && _c !== void 0 ? _c : (_d = estilo === null || estilo === void 0 ? void 0 : estilo.paragraphProps) === null || _d === void 0 ? void 0 : _d.numbering;
        si (numeración) {
            resultado.classList.add(this.numberingClass(numbering.id, numbering.level));
        }
        devolver resultado;
    }
    renderRunProperties(estilo, propiedades) {
        esto.renderCommonProperties(estilo, propiedades);
    }
    renderCommonProperties(estilo, propiedades) {
        si (props == null)
            devolver;
        si (props.color) {
            estilo["color"] = props.color;
        }
        si (props.fontSize) {
            estilo["font-size"] = props.fontSize;
        }
    }
    renderHyperlink(elem) {
        var resultado = this.createElement("a");
        este.renderChildren(elem, resultado);
        este.renderStyleValues(elem.cssStyle, resultado);
        si (elem.href) {
            resultado.href = elem.href;
        }
        de lo contrario si (elem.id) {
            const rel = este.documento.documentPart.rels
                .find(it => it.id == elem.id && it.targetMode === "Externo");
            resultado.href = rel === null || rel === void 0 ? void 0 : rel.target;
        }
        devolver resultado;
    }
    renderDrawing(elem) {
        var resultado = this.createElement("div");
        result.style.display = "bloque en línea";
        resultado.estilo.posición = "relativo";
        resultado.style.textIndent = "0px";
        este.renderChildren(elem, resultado);
        este.renderStyleValues(elem.cssStyle, resultado);
        devolver resultado;
    }
    renderImage(elem) {
        deje que el resultado sea este.createElement("img");
        este.renderStyleValues(elem.cssStyle, resultado);
        si (este.documento) {
            este.documento.loadDocumentImage(elem.src, este.currentPart).then(x => {
                resultado.src = x;
            });
        }
        devolver resultado;
    }
    renderText(elem) {
        devuelve este.htmlDocument.createTextNode(elem.text);
    }
    renderDeletedText(elem) {
        devolver esto.options.renderEndnotes ? esto.htmlDocument.createTextNode(elem.text) : null;
    }
    renderBreak(elem) {
        si (elem.break == "textWrapping") {
            devuelve esto.createElement("br");
        }
        devuelve nulo;
    }
    renderInsertado(elem) {
        si (esto.opciones.renderChanges)
            devuelve este.renderContainer(elem, "ins");
        devuelve esto.renderChildren(elem);
    }
    renderEliminado(elem) {
        si (esto.opciones.renderChanges)
            devuelve este.renderContainer(elem, "del");
        devuelve nulo;
    }
    renderSymbol(elem) {
        var span = this.createElement("span");
        span.style.fontFamily = elem.font;
        span.innerHTML = `&#x${elem.char};`;
        lapso de retorno;
    }
    renderFootnoteReference(elem) {
        var resultado = this.createElement("sup");
        este.currentFootnoteIds.push(elem.id);
        resultado.textContent = `${this.currentFootnoteIds.length}`;
        devolver resultado;
    }
    renderEndnoteReference(elem) {
        var resultado = this.createElement("sup");
        este.currentEndnoteIds.push(elem.id);
        resultado.textContent = `${this.currentEndnoteIds.length}`;
        devolver resultado;
    }
    renderTab(elem) {
        var _a;
        var tabSpan = this.createElement("span");
        tabSpan.innerHTML = " ";
        si (este.opciones.experimental) {
            tabSpan.className = este.tabStopClass();
            var paradas = (_a = findParent(elem, dom_1.DomType.Paragraph)) === null || _a === void 0 ? void 0 : _a.tabs;
            this.currentTabs.push({ paradas, span: tabSpan });
        }
        devolver tabSpan;
    }
    renderBookmarkStart(elem) {
        var resultado = this.createElement("span");
        resultado.id = elem.nombre;
        devolver resultado;
    }
    renderRun(elem) {
        si (elem.fieldRun)
            devuelve nulo;
        constante resultado = this.createElement("span");
        si (elem.id)
            resultado.id = elem.id;
        este.renderClass(elem, resultado);
        este.renderStyleValues(elem.cssStyle, resultado);
        si (elem.verticalAlign) {
            constante wrapper = this.createElement(elem.verticalAlign);
            this.renderChildren(elem, wrapper);
            resultado.appendChild(envoltorio);
        }
        demás {
            este.renderChildren(elem, resultado);
        }
        devolver resultado;
    }
    renderTable(elem) {
        deje que el resultado sea este.createElement("tabla");
        este.tableCellPositions.push(este.currentCellPosition);
        este.tableVerticalMerges.push(este.currentVerticalMerge);
        esto.currentVerticalMerge = {};
        esto.currentCellPosition = { col: 0, fila: 0 };
        si (elem.columnas)
            resultado.appendChild(this.renderTableColumns(elem.columns));
        este.renderClass(elem, resultado);
        este.renderChildren(elem, resultado);
        este.renderStyleValues(elem.cssStyle, resultado);
        esto.currentVerticalMerge = esto.tableVerticalMerges.pop();
        esto.currentCellPosition = esto.tableCellPositions.pop();
        devolver resultado;
    }
    renderTableColumns(columnas) {
        deje que el resultado sea este.createElement("colgroup");
        para (sea col de columnas) {
            deje colElem = this.createElement("col");
            si (ancho de columna)
                colElem.style.width = col.width;
            resultado.appendChild(colElem);
        }
        devolver resultado;
    }
    renderTableRow(elem) {
        deje que el resultado sea este.createElement("tr");
        este.currentCellPosition.col = 0;
        este.renderClass(elem, resultado);
        este.renderChildren(elem, resultado);
        este.renderStyleValues(elem.cssStyle, resultado);
        esto.currentCellPosition.row++;
        devolver resultado;
    }
    renderTableCell(elem) {
        deje que el resultado sea este.createElement("td");
        clave constante = this.currentCellPosition.col;
        si (elem.verticalMerge) {
            si (elem.verticalMerge == "reiniciar") {
                this.currentVerticalMerge[clave] = resultado;
                resultado.rowSpan = 1;
            }
            de lo contrario si (this.currentVerticalMerge[clave]) {
                este.currentVerticalMerge[clave].rowSpan += 1;
                resultado.estilo.display = "ninguno";
            }
        }
        demás {
            esto.currentVerticalMerge[clave] = null;
        }
        este.renderClass(elem, resultado);
        este.renderChildren(elem, resultado);
        este.renderStyleValues(elem.cssStyle, resultado);
        si (elem.span)
            resultado.colSpan = elem.span;
        este.currentCellPosition.col += resultado.colSpan;
        devolver resultado;
    }
    renderVmlPicture(elem) {
        var resultado = createElement("div");
        este.renderChildren(elem, resultado);
        devolver resultado;
    }
    renderVmlElement(elem) {
        var _a, _b;
        var contenedor = createSvgElement("svg");
        contenedor.setAttribute("estilo", elem.cssStyleText);
        constante resultado = createSvgElement(elem.tagName);
        Objeto.entries(elem.attrs).forEach(([k, v]) => resultado.setAttribute(k, v));
        si ((_a = elem.imageHref) === null || _a === void 0 ? void 0 : _a.id) {
            (_b = este.documento) === null || _b === void 0 ? void 0 : _b.loadDocumentImage(elem.imageHref.id, este.currentPart).then(x => result.setAttribute("href", x));
        }
        contenedor.appendChild(resultado);
        establecerTiempo de espera(() => {
            constante bb = contenedor.firstElementChild.getBBox();
            contenedor.setAttribute("ancho", `${Math.ceil(bb.x + bb.width)}`);
            contenedor.setAttribute("altura", `${Math.ceil(bb.y + bb.height)}`);
        }, 0);
        contenedor de retorno;
    }
    renderMmlRadical(elem) {
        var _a;
        const base = elem.children.find(el => el.type == dom_1.DomType.MmlBase);
        si ((_a = elem.props) === nulo || _a === vacío 0 ? vacío 0 : _a.ocultarGrado) {
            devolver createElementNS(ns.mathML, "msqrt", null, this.renderElements([base]));
        }
        constante grado = elem.children.find(el => el.type == dom_1.DomType.MmlDegree);
        devolver createElementNS(ns.mathML, "mroot", null, this.renderElements([base, grado]));
    }
    renderMmlDelimiter(elem) {
        var _a, _b;
        const hijos = [];
        niños.push(createElementNS(ns.mathML, "mo", null, [(_a = elem.props.beginChar) !== null && _a !== void 0 ? _a : '(']));
        niños.push(...this.renderElements(elem.children));
        niños.push(createElementNS(ns.mathML, "mo", null, [(_b = elem.props.endChar) !== null && _b !== void 0 ? _b : ')']));
        devolver createElementNS(ns.mathML, "mrow", null, hijos);
    }
    renderMmlNary(elem) {
        var _a;
        const hijos = [];
        constante agrupada = (0, utils_1.keyBy)(elem.children, x => x.type);
        const sup = agrupado[dom_1.DomType.MmlSuperArgument];
        constante sub = agrupado[dom_1.DomType.MmlSubArgument];
        const supElem = sup ? createElementNS(ns.mathML, "mo", null, (0, utils_1.asArray)(this.renderElement(sup))) : null;
        constante subElem = sub? createElementNS(ns.mathML, "mo", null, (0, utils_1.asArray)(this.renderElement(sub))): nulo;
        si ((_a = elem.props) === nulo || _a === void 0 ? void 0 : _a.char) {
            constante charElem = createElementNS(ns.mathML, "mo", null, [elem.props.char]);
            si (supElem || subElem) {
                niños.push(createElementNS(ns.mathML, "munderover", null, [charElem, subElem, supElem]));
            }
            de lo contrario si (supElem) {
                niños.push(createElementNS(ns.mathML, "mover", null, [charElem, supElem]));
            }
            de lo contrario si (subElem) {
                niños.push(createElementNS(ns.mathML, "munder", null, [charElem, subElem]));
            }
            demás {
                niños.push(charElem);
            }
        }
        niños.push(...this.renderElements(grouped[dom_1.DomType.MmlBase].children));
        devolver createElementNS(ns.mathML, "mrow", null, hijos);
    }
    renderMmlRun(elem) {
        constante resultado = createElementNS(ns.mathML, "ms");
        este.renderClass(elem, resultado);
        este.renderStyleValues(elem.cssStyle, resultado);
        este.renderChildren(elem, resultado);
        devolver resultado;
    }
    renderStyleValues(estilo, salida) {
        Objeto.asignar(salida.estilo, estilo);
    }
    renderClass(entrada, salida) {
        si (entrada.nombreClase)
            salida.nombreClase = entrada.nombreClase;
        si (entrada.nombreEstilo)
            salida.classList.add(this.processStyleName(input.styleName));
    }
    findStyle(nombreDeEstilo) {
        var _a;
        devolver nombreEstilo && ((_a = this.styleMap) === null || _a === void 0 ? void 0 : _a[nombreEstilo]);
    }
    clasenumeración(id, lvl) {
        devuelve `${this.className}-num-${id}-${lvl}`;
    }
    tabStopClass() {
        devuelve `${this.className}-tab-stop`;
    }
    styleToString(selectores, valores, cssText = null) {
        deje que el resultado sea `${selectores} {\r\n`;
        para (clave constante en valores) {
            resultado += ` ${clave}: ${valores[clave]};\r\n`;
        }
        si (texto CSS)
            resultado += cssText;
        devolver resultado + "}\r\n";
    }
    contadorDeNumeración(id, lvl) {
        devuelve `${this.className}-num-${id}-${lvl}`;
    }
    nivelTextoContenido(texto, suff, id, formato numérico) {
        var _a;
        constante suffMap = {
            "tab": "\\9",
            "espacio": "\\a0",
        };
        var resultado = texto.reemplazar(/%\d*/g, s => {
            sea ​​lvl = parseInt(s.substring(1), 10) - 1;
            devuelve `"contador(${this.numberingCounter(id, lvl)}, ${numformat})"`;
        });
        devolver `"${resultado}${(_a = suffMap[suff]) !== null && _a !== void 0 ? _a : ""}"`;
    }
    numFormatToCssValue(formato) {
        var mapping = {
            "ninguno": "ninguno",
            "bala": "disco",
            "decimal": "decimal",
            "letraminúscula": "alfa inferior",
            "letramayúscula": "alfa-mayúscula",
            "lowerRoman": "bajo-romano",
            "upperRoman": "alto-romano",
        };
        retorno mapping[formato] || formato;
    }
    actualizarTabStops() {
        si (!este.opciones.experimental)
            devolver;
        clearTimeout(este.tabsTimeout);
        esto.tabsTimeout = setTimeout(() => {
            constante pixelToPoint = (0, javascript_1.computePixelToPoint)();
            para (dejar pestaña de este.currentTabs) {
                (0, javascript_1.updateTabStop)(tab.span, tab.stops, este.defaultTabSize, pixelToPoint);
            }
        }, 500);
    }
}
exportaciones.HtmlRenderer = HtmlRenderer;
función createElement(tagName, props, children) {
    devolver createElementNS(indefinido, tagName, props, hijos);
}
función createSvgElement(nombreDeEtiqueta, propiedades, hijos) {
    devolver createElementNS(ns.svg, tagName, props, children);
}
función createElementNS(ns, tagName, props, children) {
    var resultado = ns ? document.createElementNS(ns, nombreDeEtiqueta) : document.createElement(nombreDeEtiqueta);
    Objeto.assign(resultado,props);
    niños && appendChildren(resultado, niños);
    devolver resultado;
}
función removeAllElements(elem) {
    elem.innerHTML = '';
}
función appendChildren(elem, hijos) {
    niños.forEach(c => elem.appendChild((0, utils_1.isString)(c) ? document.createTextNode(c) : c));
}
función createStyleElement(cssText) {
    devolver createElement("estilo", { innerHTML: cssText });
}
función appendComment(elem, comentario) {
    elem.appendChild(documento.createComment(comentario));
}
función findParent(elem, tipo) {
    var padre = elem.padre;
    mientras (padre != null && padre.tipo != tipo)
        padre = padre.padre;
    devolver padre;
}


/***/ }),

/***/ "./src/javascript.ts":
/*!***************************!*\
  !*** ./src/javascript.ts ***!
  \***************************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exportaciones.updateTabStop = exportaciones.computePixelToPoint = void 0;
const default Tab = { pos: 0, leader: "ninguno", style: "izquierda" };
constante maxTabs = 50;
función computePixelToPoint(contenedor = documento.cuerpo) {
    constante temp = document.createElement("div");
    temp.style.width = '100pt';
    contenedor.appendChild(temp);
    constante resultado = 100 / temp.offsetWidth;
    contenedor.removeChild(temp);
    devolver resultado;
}
exportaciones.computePixelToPoint = computePixelToPoint;
función updateTabStop(elem, pestañas, defaultTabSize, pixelToPoint = 72 / 96) {
    constante p = elem.closest("p");
    constante ebb = elem.getBoundingClientRect();
    constante pbb = p.getBoundingClientRect();
    constante pcs = getComputedStyle(p);
    const tabStops = (pestañas === null || pestañas === void 0 ? void 0 : pestañas.length) > 0 ? pestañas.map(t => ({
        pos: longitudAlPunto(t.posición),
        líder: t.líder,
        estilo: t.style
    })).sort((a, b) => a.pos - b.pos) : [defaultTab];
    constante lastTab = tabStops[tabStops.length - 1];
    constante pWidthPt = pbb.width * pixelToPoint;
    constante tamaño = lengthToPoint(defaultTabSize);
    sea ​​pos = lastTab.pos + tamaño;
    si (pos < pWidthPt) {
        para (; pos < pWidthPt && tabStops.length < maxTabs; pos += tamaño) {
            tabStops.push(Objeto.asignar(Objeto.asignar({}, defaultTab), { pos: pos }));
        }
    }
    const marginLeft = parseFloat(pcs.marginLeft);
    constante pOffset = pbb.left + marginLeft;
    constante izquierda = (ebb.left - pOffset) * pixelToPoint;
    const tab = tabStops.find(t => t.style != "clear" && t.pos > left);
    si (tab == null)
        devolver;
    deje que el ancho sea 1;
    si (tab.style == "derecha" || tab.style == "centro") {
        constante tabStops = Array.from(p.querySelectorAll(`.${elem.className}`));
        constante nextIdx = tabStops.indexOf(elem) + 1;
        constante rango = documento.createRange();
        rango.setStart(elem, 1);
        si (nextIdx < tabStops.length) {
            rango.setEndBefore(tabStops[nextIdx]);
        }
        demás {
            rango.setEndAfter(p);
        }
        const mul = tab.style == "centro" ? 0.5 : 1;
        constante nextBB = rango.getBoundingClientRect();
        constante offset = nextBB.left + mul * nextBB.width - (pbb.left - marginLeft);
        ancho = tab.pos - desplazamiento * pixelToPoint;
    }
    demás {
        ancho = tab.pos - izquierda;
    }
    elem.innerHTML = "";
    elem.style.textDecoration = "heredar";
    elem.style.wordSpacing = `${width.toFixed(0)}pt`;
    cambiar (tab.leader) {
        caso "punto":
        caso "puntomedio":
            elem.style.textDecoration = "subrayado";
            elem.style.textDecorationStyle = "punteado";
            romper;
        caso "guión":
        caso "pesado":
        caso "guión bajo":
            elem.style.textDecoration = "subrayado";
            romper;
    }
}
exportaciones.updateTabStop = updateTabStop;
función lengthToPoint(longitud) {
    devolver parseFloat(longitud);
}


/***/ }),

/***/ "./src/notas/elementos.ts":
/*!*******************************!*\
  !*** ./src/notes/elements.ts ***!
  \*******************************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones, __paquete_web_require__) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exportaciones.WmlEndnote = exportaciones.WmlFootnote = exportaciones.WmlBaseNote = void 0;
constante dom_1 = __webpack_require__(/*! ../documento/dom */ "./src/documento/dom.ts");
clase WmlBaseNote {
    constructor() {
        esto.niños = [];
        este.cssStyle = {};
    }
}
exportaciones.WmlBaseNote = WmlBaseNote;
clase WmlFootnote extiende WmlBaseNote {
    constructor() {
        super(...argumentos);
        este.tipo = dom_1.DomType.Footnote;
    }
}
exportaciones.WmlFootnote = WmlFootnote;
clase WmlEndnote extiende WmlBaseNote {
    constructor() {
        super(...argumentos);
        este.tipo = dom_1.DomType.Endnote;
    }
}
exportaciones.WmlEndnote = WmlEndnote;


/***/ }),

/***/ "./src/notas/partes.ts":
/*!****************************!*\
  !*** ./src/notas/partes.ts ***!
  \****************************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones, __paquete_web_require__) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exportaciones.EndnotesPart = exportaciones.FootnotesPart = exportaciones.BaseNotePart = void 0;
constante parte_1 = __webpack_require__(/*! ../common/part */ "./src/common/part.ts");
constante elementos_1 = __webpack_require__(/*! ./elementos */ "./src/notas/elementos.ts");
clase BaseNotePart extiende part_1.Part {
    constructor(pkg, ruta, analizador) {
        super(pkg, ruta);
        this._documentParser = analizador;
    }
}
exportaciones.BaseNotePart = BaseNotePart;
clase FootnotesPart extiende BaseNotePart {
    constructor(pkg, ruta, analizador) {
        super(pkg, ruta, analizador);
    }
    parseXml(raíz) {
        this.notes = this._documentParser.parseNotes(raíz, "nota al pie", elementos_1.WmlFootnote);
    }
}
exportaciones.FootnotesPart = FootnotesPart;
clase EndnotesPart extiende BaseNotePart {
    constructor(pkg, ruta, analizador) {
        super(pkg, ruta, analizador);
    }
    parseXml(raíz) {
        this.notes = this._documentParser.parseNotes(root, "nota final", elementos_1.WmlEndnote);
    }
}
exportaciones.EndnotesPart = EndnotesPart;


/***/ }),

/***/ "./src/numeración/parte-de-numeración.ts":
/*!********************************************!*\
  !*** ./src/numbering/numbering-part.ts ***!
  \*****************************************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones, __paquete_web_require__) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exportaciones.NumberingPart = void 0;
constante parte_1 = __webpack_require__(/*! ../common/part */ "./src/common/part.ts");
constante numeración_1 = __webpack_require__(/*! ./numeración */ "./src/numeración/numbering.ts");
clase NumberingPart extiende part_1.Part {
    constructor(pkg, ruta, analizador) {
        super(pkg, ruta);
        this._documentParser = analizador;
    }
    parseXml(raíz) {
        Objeto.assign(this, (0, numeración_1.parseNumberingPart)(raíz, this._package.xmlParser));
        este.domNumberings = este._documentParser.parseNumberingFile(root);
    }
}
exportaciones.NumberingPart = NumeraciónPart;


/***/ }),

/***/ "./src/numeración/numeración.ts":
/*!************************************!*\
  !*** ./src/numbering/numbering.ts ***!
  \************************************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones, __paquete_web_require__) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exportaciones.parseNumberingBulletPicture = exportaciones.parseNumberingLevelOverrride = exportaciones.parseNumberingLevel = exportaciones.parseAbstractNumbering = exportaciones.parseNumbering = exportaciones.parseNumberingPart = void 0;
constante párrafo_1 = __webpack_require__(/*! ../documento/párrafo */ "./src/documento/párrafo.ts");
constante run_1 = __webpack_require__(/*! ../documento/run */ "./src/documento/run.ts");
función parseNumberingPart(elem, xml) {
    deje que el resultado sea {
        numeraciones: [],
        resumenNumeraciones: [],
        Imágenes de bala: []
    };
    para (sea e de xml.elements(elem)) {
        cambiar (e.nombrelocal) {
            caso "num":
                resultado.numeraciones.push(parseNumbering(e, xml));
                romper;
            caso "abstractNum":
                resultado.abstractNumberings.push(parseAbstractNumbering(e, xml));
                romper;
            caso "numPicBullet":
                resultado.bulletPictures.push(parseNumberingBulletPicture(e, xml));
                romper;
        }
    }
    devolver resultado;
}
exportaciones.parseNumberingPart = parseNumberingPart;
función parseNumbering(elem, xml) {
    deje que el resultado sea {
        id: xml.attr(elem, 'numId'),
        anulaciones: []
    };
    para (sea e de xml.elements(elem)) {
        cambiar (e.nombrelocal) {
            caso "abstractNumId":
                resultado.abstractId = xml.attr(e, "val");
                romper;
            caso "lvlOverride":
                resultado.overrides.push(parseNumberingLevelOverrride(e, xml));
                romper;
        }
    }
    devolver resultado;
}
exportaciones.parseNumbering = parseNumbering;
función parseAbstractNumbering(elem, xml) {
    deje que el resultado sea {
        id: xml.attr(elem, 'abstractNumId'),
        niveles: []
    };
    para (sea e de xml.elements(elem)) {
        cambiar (e.nombrelocal) {
            caso "nombre":
                resultado.nombre = xml.attr(e, "val");
                romper;
            caso "multiLevelType":
                resultado.multiLevelType = xml.attr(e, "val");
                romper;
            caso "numStyleLink":
                resultado.numberingStyleLink = xml.attr(e, "val");
                romper;
            caso "styleLink":
                resultado.styleLink = xml.attr(e, "val");
                romper;
            caso "lvl":
                resultado.levels.push(parseNumberingLevel(e, xml));
                romper;
        }
    }
    devolver resultado;
}
exportaciones.parseAbstractNumbering = parseAbstractNumbering;
función parseNumberingLevel(elem, xml) {
    deje que el resultado sea {
        nivel: xml.intAttr(elem, 'ilvl')
    };
    para (sea e de xml.elements(elem)) {
        cambiar (e.nombrelocal) {
            caso "inicio":
                resultado.inicio = xml.attr(e, "val");
                romper;
            caso "lvlRestart":
                resultado.reiniciar = xml.intAttr(e, "val");
                romper;
            caso "numFmt":
                resultado.formato = xml.attr(e, "val");
                romper;
            caso "lvlText":
                resultado.texto = xml.attr(e, "val");
                romper;
            caso "lvlJc":
                resultado.justificación = xml.attr(e, "val");
                romper;
            caso "lvlPicBulletId":
                resultado.bulletPictureId = xml.attr(e, "val");
                romper;
            caso "pStyle":
                resultado.paragraphStyle = xml.attr(e, "val");
                romper;
            caso "pPr":
                resultado.paragraphProps = (0, párrafo_1.parseParagraphProperties)(e, xml);
                romper;
            caso "rPr":
                resultado.runProps = (0, run_1.parseRunProperties)(e, xml);
                romper;
        }
    }
    devolver resultado;
}
exportaciones.parseNumberingLevel = parseNumberingLevel;
función parseNumberingLevelOverrride(elem, xml) {
    deje que el resultado sea {
        nivel: xml.intAttr(elem, 'ilvl')
    };
    para (sea e de xml.elements(elem)) {
        cambiar (e.nombrelocal) {
            caso "startOverride":
                resultado.inicio = xml.intAttr(e, "val");
                romper;
            caso "lvl":
                resultado.numberingLevel = parseNumberingLevel(e, xml);
                romper;
        }
    }
    devolver resultado;
}
exportaciones.parseNumberingLevelOverrride = parseNumberingLevelOverrride;
función parseNumberingBulletPicture(elem, xml) {
    var pict = xml.element(elem, "pict");
    var forma = pict && xml.elemento(pict, "forma");
    var imagedata = forma && xml.element(forma, "imagedata");
    devolver datos de imagen ? {
        id: xml.attr(elem, "numPicBulletId"),
        referenceId: xml.attr(datos de imagen, "id"),
        estilo: xml.attr(forma, "estilo")
    } : nulo;
}
exportaciones.parseNumberingBulletPicture = parseNumberingBulletPicture;


/***/ }),

/***/ "./src/parser/xml-parser.ts":
/*!**********************************!*\
  !*** ./src/parser/xml-parser.ts ***!
  \**********************************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones, __paquete_web_require__) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exportaciones.XmlParser = exportaciones.serializeXmlString = exportaciones.parseXmlString = void 0;
constante común_1 = __webpack_require__(/*! ../documento/common */ "./src/documento/common.ts");
función parseXmlString(xmlString, trimXmlDeclaration = false) {
    si (declaración trimXml)
        xmlString = xmlString.replace(/<[?].*[?]>/, "");
    const resultado = nuevo DOMParser().parseFromString(xmlString, "aplicacion/xml");
    const errorText = hasXmlParserError(resultado);
    si (errorTexto)
        lanzar nuevo Error(errorText);
    devolver resultado;
}
exports.parseXmlString = parseXmlString;
función hasXmlParserError(doc) {
    var _a;
    devolver (_a = doc.getElementsByTagName("parsererror")[0]) === nulo || _a === vacío 0 ? vacío 0 : _a.textContent;
}
función serializeXmlString(elem) {
    devolver nuevo XMLSerializer().serializeToString(elem);
}
exportaciones.serializeXmlString = serializeXmlString;
clase XmlParser {
    elementos (elem, nombre local = nulo) {
        const resultado = [];
        para (sea i = 0, l = elem.childNodes.length; i < l; i++) {
            let c = elem.childNodes.item(i);
            if (c.nodeType == 1 && (localName == null || c.localName == localName))
                resultado.push(c);
        }
        devolver resultado;
    }
    elemento(elem, nombrelocal) {
        para (sea i = 0, l = elem.childNodes.length; i < l; i++) {
            let c = elem.childNodes.item(i);
            if (c.nodeType == 1 && c.localName == localName)
                devolver c;
        }
        devuelve nulo;
    }
    elementAttr(elem, localName, attrLocalName) {
        var el = this.element(elem, localName);
        devolver el ? this.attr(el, attrLocalName) : indefinido;
    }
    atributos(elem) {
        devuelve Array.from(elem.atributos);
    }
    attr(elem, nombrelocal) {
        para (sea i = 0, l = elem.atributos.longitud; i < l; i++) {
            sea ​​a = elem.atributos.item(i);
            si (a.nombrelocal == nombrelocal)
                devuelve un valor;
        }
        devuelve nulo;
    }
    intAttr(nodo, nombreDeAttr, valorPredeterminado = nulo) {
        var val = this.attr(nodo, attrName);
        valor de retorno? parseInt(val): valor predeterminado;
    }
    hexAttr(nodo, nombreDeAtributo, valorPredeterminado = nulo) {
        var val = this.attr(nodo, attrName);
        valor de retorno? parseInt(val, 16): valor predeterminado;
    }
    floatAttr(nodo, nombreDeAtributo, valorPredeterminado = nulo) {
        var val = this.attr(nodo, attrName);
        devolver val ? parseFloat(val) : valorPredeterminado;
    }
    boolAttr(nodo, nombreDeAtributo, valorPredeterminado = nulo) {
        devuelve (0, common_1.convertBoolean)(this.attr(nodo, attrName), valor predeterminado);
    }
    lengthAttr(nodo, attrName, uso = common_1.LengthUsage.Dxa) {
        devolver (0, common_1.convertLength)(this.attr(nodo, attrName), uso);
    }
}
exportaciones.XmlParser = XmlParser;
constante globalXmlParser = nuevo XmlParser();
exportaciones["predeterminado"] = globalXmlParser;


/***/ }),

/***/ "./src/configuraciones/configuraciones-parte.ts":
/*!***************************************!*\
  !*** ./src/configuraciones/configuraciones-part.ts ***!
  \***************************************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones, __paquete_web_require__) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exportaciones.SettingsPart = void 0;
constante parte_1 = __webpack_require__(/*! ../common/part */ "./src/common/part.ts");
constante settings_1 = __webpack_require__(/*! ./settings */ "./src/settings/settings.ts");
clase SettingsPart extiende part_1.Part {
    constructor(pkg, ruta) {
        super(pkg, ruta);
    }
    parseXml(raíz) {
        este.settings = (0, settings_1.parseSettings)(root, este._package.xmlParser);
    }
}
exportaciones.SettingsPart = SettingsPart;


/***/ }),

/***/ "./src/configuraciones/configuraciones.ts":
/*!**********************************!*\
  !*** ./src/configuraciones/configuraciones.ts ***!
  \**********************************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exportaciones.parseNoteProperties = exportaciones.parseSettings = void 0;
función parseSettings(elem, xml) {
    var resultado = {};
    para (sea el de xml.elements(elem)) {
        cambiar (el.nombrelocal) {
            caso "defaultTabStop":
                resultado.defaultTabStop = xml.lengthAttr(el, "val");
                romper;
            caso "footnotePr":
                resultado.footnoteProps = parseNoteProperties(el, xml);
                romper;
            caso "endnotePr":
                resultado.endnoteProps = parseNoteProperties(el, xml);
                romper;
            caso "autoHyphenation":
                resultado.autoHyphenation = xml.boolAttr(el, "val");
                romper;
        }
    }
    devolver resultado;
}
exportaciones.parseSettings = parseSettings;
función parseNoteProperties(elem, xml) {
    var resultado = {
        ID de nota predeterminados: []
    };
    para (sea el de xml.elements(elem)) {
        cambiar (el.nombrelocal) {
            caso "numFmt":
                resultado.nummeringFormat = xml.attr(el, "val");
                romper;
            caso "nota a pie de página":
            caso "nota final":
                resultado.defaultNoteIds.push(xml.attr(el, "id"));
                romper;
        }
    }
    devolver resultado;
}
exportaciones.parseNoteProperties = parseNoteProperties;


/***/ }),

/***/ "./src/styles/styles-part.ts":
/*!**************************************!*\
  !*** ./src/styles/styles-part.ts ***!
  \***********************************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones, __paquete_web_require__) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exportaciones.StylesPart = void 0;
constante parte_1 = __webpack_require__(/*! ../common/part */ "./src/common/part.ts");
clase StylesPart extiende part_1.Part {
    constructor(pkg, ruta, analizador) {
        super(pkg, ruta);
        this._documentParser = analizador;
    }
    parseXml(raíz) {
        este.styles = este._documentParser.parseStylesFile(root);
    }
}
exportaciones.StylesPart = StylesPart;


/***/ }),

/***/ "./src/tema/parte-del-tema.ts":
/*!*********************************!*\
  !*** ./src/theme/theme-part.ts ***!
  \*********************************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones, __paquete_web_require__) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exportaciones.ThemePart = void 0;
constante parte_1 = __webpack_require__(/*! ../common/part */ "./src/common/part.ts");
constante tema_1 = __webpack_require__(/*! ./tema */ "./src/tema/tema.ts");
clase ThemePart extiende part_1.Part {
    constructor(pkg, ruta) {
        super(pkg, ruta);
    }
    parseXml(raíz) {
        este.tema = (0, tema_1.parseTheme)(raíz, este._paquete.xmlParser);
    }
}
exportaciones.ThemePart = ThemePart;


/***/ }),

/***/ "./src/tema/tema.ts":
/*!****************************!*\
  !*** ./src/theme/theme.ts ***!
  \****************************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exportaciones.parseFontInfo = exportaciones.parseFontScheme = exportaciones.parseColorScheme = exportaciones.parseTheme = exportaciones.DmlTheme = void 0;
clase DmlTheme {
}
exportaciones.DmlTheme = DmlTheme;
función parseTheme(elem, xml) {
    var resultado = nuevo DmlTheme();
    var themeElements = xml.element(elem, "themeElements");
    para (sea el de xml.elements(themeElements)) {
        cambiar (el.nombrelocal) {
            caso "clrScheme":
                resultado.colorScheme = parseColorScheme(el, xml);
                romper;
            caso "fontScheme":
                resultado.fontScheme = parseFontScheme(el, xml);
                romper;
        }
    }
    devolver resultado;
}
exportaciones.parseTheme = parseTheme;
función parseColorScheme(elem, xml) {
    var resultado = {
        nombre: xml.attr(elem, "nombre"),
        colores: {}
    };
    para (sea el de xml.elements(elem)) {
        var srgbClr = xml.element(el, "srgbClr");
        var sysClr = xml.element(el, "sysClr");
        si (srgbClr) {
            resultado.colores[el.localName] = xml.attr(srgbClr, "val");
        }
        de lo contrario si (sysClr) {
            resultado.colores[el.localName] = xml.attr(sysClr, "lastClr");
        }
    }
    devolver resultado;
}
exportaciones.parseColorScheme = parseColorScheme;
función parseFontScheme(elem, xml) {
    var resultado = {
        nombre: xml.attr(elem, "nombre"),
    };
    para (sea el de xml.elements(elem)) {
        cambiar (el.nombrelocal) {
            caso "majorFont":
                resultado.majorFont = parseFontInfo(el, xml);
                romper;
            caso "minorFont":
                resultado.minorFont = parseFontInfo(el, xml);
                romper;
        }
    }
    devolver resultado;
}
exportaciones.parseFontScheme = parseFontScheme;
función parseFontInfo(elem, xml) {
    devolver {
        latinTypeface: xml.elementAttr(elem, "latin", "tipo de letra"),
        eaTypeface: xml.elementAttr(elem, "ea", "tipo de letra"),
        csTypeface: xml.elementAttr(elem, "cs", "tipo de letra"),
    };
}
exportaciones.parseFontInfo = parseFontInfo;


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exportaciones.asArray = exportaciones.formatCssRules = exportaciones.parseCssRules = exportaciones.mergeDeep = exportaciones.isString = exportaciones.isObject = exportaciones.blobToBase64 = exportaciones.keyBy = exportaciones.resolvePath = exportaciones.splitPath = exportaciones.escapeClassName = void 0;
función escapeClassName(nombreClase) {
    devolver nombreClase === null || nombreClase === void 0 ? void 0 : nombreClase.replace(/[ .]+/g, '-').replace(/[&]+/g, 'and').toLowerCase();
}
exportaciones.escapeClassName = escapeClassName;
función splitPath(ruta) {
    sea ​​si = path.lastIndexOf('/') + 1;
    deje que la carpeta = si == 0 ? "" : ruta.substring(0, si);
    deje que fileName = si == 0 ? ruta: ruta.substring(si);
    devolver [carpeta, nombre_archivo];
}
exportaciones.splitPath = splitPath;
función resolvePath(ruta, base) {
    intentar {
        const prefijo = "http://docx/";
        const url = nueva URL(ruta, prefijo + base).toString();
        devolver url.substring(prefijo.longitud);
    }
    atrapar (_a) {
        devuelve `${base}${ruta}`;
    }
}
exportaciones.resolvePath = resolvePath;
función keyBy(matriz, por) {
    devolver matriz.reduce((a, x) => {
        a[por(x)] = x;
        devolver un;
    }, {});
}
exportaciones.keyBy = keyBy;
función blobToBase64(blob) {
    devolver nueva Promesa((resolver, _) => {
        const lector = nuevo FileReader();
        lector.onloadend = () => resolver(lector.resultado);
        lector.readAsDataURL(blob);
    });
}
exportaciones.blobToBase64 = blobToBase64;
función isObject(item) {
    devolver elemento && tipo de elemento === 'objeto' && !Array.isArray(elemento);
}
exportaciones.isObject = esObjeto;
función isString(item) {
    devolver elemento && tipo de elemento === 'cadena' || elemento instancia de cadena;
}
exportaciones.isString = isString;
función mergeDeep(objetivo, ...fuentes) {
    var _a;
    si (!fuentes.longitud)
        objetivo de retorno;
    const fuente = fuentes.shift();
    si (isObject(objetivo) && isObject(fuente)) {
        para (clave constante en la fuente) {
            si (isObject(fuente[clave])) {
                const val = (_a = objetivo[clave]) !== null && _a !== void 0 ? _a : (objetivo[clave] = {});
                mergeDeep(val, fuente[clave]);
            }
            demás {
                objetivo[clave] = fuente[clave];
            }
        }
    }
    devolver mergeDeep(objetivo, ...fuentes);
}
exportaciones.mergeDeep = mergeDeep;
función parseCssRules(texto) {
    const resultado = {};
    para (regla constante de texto.split(';')) {
        const [clave, val] = regla.split(':');
        resultado[clave] = val;
    }
    devolver resultado;
}
exportaciones.parseCssRules = parseCssRules;
función formatCssRules(estilo) {
    devolver Objeto.entries(estilo).map((k, v) => `${k}: ${v}`).join(';');
}
exportaciones.formatCssRules = formatCssRules;
función asArray(val) {
    devolver Array.isArray(val)? valor: [valor];
}
exportaciones.asArray = asArray;


/***/ }),

/***/ "./src/vml/vml.ts":
/*!************************!*\
  !*** ./src/vml/vml.ts ***!
  \************************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones, __paquete_web_require__) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exportaciones.parseVmlElement = exportaciones.VmlElement = void 0;
constante común_1 = __webpack_require__(/*! ../documento/common */ "./src/documento/common.ts");
constante dom_1 = __webpack_require__(/*! ../documento/dom */ "./src/documento/dom.ts");
constante xml_parser_1 = __webpack_require__(/*! ../parser/xml-parser */ "./src/parser/xml-parser.ts");
clase VmlElement {
    constructor() {
        este.tipo = dom_1.DomType.VmlElement;
        esto.attrs = {};
        esto.niños = [];
    }
}
exportaciones.VmlElement = VmlElement;
función parseVmlElement(elem) {
    resultado var = nuevo VmlElement();
    cambiar (elem.nombrelocal) {
        caso "rect":
            resultado.tagName = "rect";
            Objeto.assign(resultado.attrs, { ancho: '100%', alto: '100%' });
            romper;
        caso "ovalado":
            resultado.tagName = "elipse";
            Objeto.assign(resultado.attrs, { cx: "50%", cy: "50%", rx: "50%", ry: "50%" });
            romper;
        caso "línea":
            resultado.tagName = "línea";
            romper;
        caso "forma":
            resultado.tagName = "g";
            romper;
        por defecto:
            devuelve nulo;
    }
    para (constante en de xml_parser_1.default.attrs(elem)) {
        cambiar (en.nombrelocal) {
            caso "estilo":
                resultado.cssStyleText = en.valor;
                romper;
            caso "color de relleno":
                resultado.attrs.fill = en.valor;
                romper;
            caso "de":
                constante [x1, y1] = parsePoint(at.value);
                Objeto.assign(resultado.attrs, { x1, y1 });
                romper;
            caso "a":
                constante [x2, y2] = parsePoint(at.value);
                Objeto.assign(resultado.attrs, { x2, y2 });
                romper;
        }
    }
    para (const el de xml_parser_1.default.elements(elem)) {
        cambiar (el.nombrelocal) {
            caso "accidente cerebrovascular":
                Objeto.assign(resultado.attrs, parseStroke(el));
                romper;
            caso "rellenar":
                Objeto.assign(resultado.attrs, parseFill(el));
                romper;
            caso "datos de imagen":
                resultado.tagName = "imagen";
                Objeto.assign(resultado.attrs, { ancho: '100%', alto: '100%' });
                resultado.imageHref = {
                    id: xml_parser_1.default.attr(el, "id"),
                    título: xml_parser_1.default.attr(el, "título"),
                };
                romper;
            por defecto:
                constante hijo = parseVmlElement(el);
                niño && resultado.chidren.push(niño);
                romper;
        }
    }
    devolver resultado;
}
exportaciones.parseVmlElement = parseVmlElement;
función parseStroke(el) {
    var _a;
    devolver {
        'trazo': xml_parser_1.default.attr(el, "color"),
        'ancho de trazo': (_a = xml_parser_1.default.lengthAttr(el, "peso", common_1.LengthUsage.Emu)) !== null && _a !== void 0 ? _a : '1px'
    };
}
función parseFill(el) {
    devolver {};
}
función parsePoint(val) {
    devolver val.split(",");
}
función convertPath(ruta) {
    ruta de retorno.reemplazar(/([mlxe])|([-\d]+)|([,])/g, (m) => {
        si (/[-\d]/.test(m))
            devuelve (0, común_1.convertLength)(m, común_1.LengthUsage.VmlEmu);
        si (/[ml,]/.test(m))
            devolver m;
        devolver '';
    });
}


/***/ }),

/***/ "./src/word-document.ts":
/*!******************************!*\
  !*** ./src/word-document.ts ***!
  \******************************/
/***/ ((__módulo_de_paquete_web_no_utilizado, exportaciones, __paquete_web_require__) => {


Object.defineProperty(exportaciones, "__esModule", ({ valor: verdadero }));
exportaciones.deofuscar = exportaciones.WordDocument = void 0;
constante relación_1 = __webpack_require__(/*! ./common/relationship */ "./src/common/relationship.ts");
const font_table_1 = __webpack_require__(/*! ./font-table/font-table */ "./src/font-table/font-table.ts");
constante open_xml_package_1 = __webpack_require__(/*! ./common/open-xml-package */ "./src/common/open-xml-package.ts");
const document_part_1 = __webpack_require__(/*! ./document/document-part */ "./src/document/document-part.ts");
constante utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
const numeración_parte_1 = __webpack_require__(/*! ./numeración/numeración-parte */ "./src/numeración/numeración-parte.ts");
constante estilos_parte_1 = __webpack_require__(/*! ./estilos/estilos-parte */ "./src/estilos/estilos-parte.ts");
const partes_1 = __webpack_require__(/*! ./encabezado-pie/partes */ "./src/encabezado-pie/partes.ts");
const extended_props_part_1 = __webpack_require__(/*! ./document-props/extended-props-part */ "./src/document-props/extended-props-part.ts");
constante core_props_part_1 = __webpack_require__(/*! ./document-props/core-props-part */ "./src/document-props/core-props-part.ts");
const theme_part_1 = __webpack_require__(/*! ./theme/theme-part */ "./src/theme/theme-part.ts");
constante partes_2 = __webpack_require__(/*! ./notas/partes */ "./src/notas/partes.ts");
constante settings_part_1 = __webpack_require__(/*! ./settings/settings-part */ "./src/settings/settings-part.ts");
constante custom_props_part_1 = __webpack_require__(/*! ./document-props/custom-props-part */ "./src/document-props/custom-props-part.ts");
constante topLevelRels = [
    { tipo: relación_1.RelationshipTypes.OfficeDocument, destino: "word/document.xml" },
    { tipo: relación_1.RelationshipTypes.ExtendedProperties, destino: "docProps/app.xml" },
    { tipo: relación_1.RelationshipTypes.CoreProperties, destino: "docProps/core.xml" },
    { tipo: relación_1.RelationshipTypes.CustomProperties, destino: "docProps/custom.xml" },
];
clase WordDocument {
    constructor() {
        esto.partes = [];
        este.partsMap = {};
    }
    carga estática(blob, analizador, opciones) {
        var d = nuevo WordDocument();
        d._opciones = opciones;
        d._parser = analizador;
        devolver open_xml_package_1.OpenXmlPackage.load(blob, opciones)
            .then(paquete => {
            d._paquete = paquete;
            devolver d._package.loadRelationships();
        }). entonces(rels => {
            d.rels = rels;
            constante tareas = topLevelRels.map(rel => {
                var _a;
                constante r = (_a = rels.find(x => x.type === rel.type)) !== nulo && _a !== vacío 0 ? _a : rel;
                devuelve d.loadRelationshipPart(r.objetivo, r.tipo);
            });
            devolver Promise.all(tareas);
        }). entonces(() => d);
    }
    guardar(tipo = "blob") {
        devuelve este._paquete.save(tipo);
    }
    loadRelationshipPart(ruta, tipo) {
        si (this.partsMap[ruta])
            devuelve Promise.resolve(this.partsMap[ruta]);
        si (!this._package.get(ruta))
            devolver Promesa.resolve(null);
        deje que parte = nulo;
        interruptor (tipo) {
            caso relación_1.RelationshipTypes.OfficeDocument:
                this.documentPart = part = new document_part_1.DocumentPart(this._package, path, this._parser);
                romper;
            caso relación_1.RelationshipTypes.FontTable:
                este.fontTablePart = parte = new font_table_1.FontTablePart(este._paquete, ruta);
                romper;
            caso relación_1.Tipos de relación.Numeración:
                this.numberingPart = parte = new numbering_part_1.NumberingPart(this._package, path, this._parser);
                romper;
            caso relación_1.RelationshipTypes.Styles:
                este.stylesPart = parte = new styles_part_1.StylesPart(este._paquete, ruta, este._parser);
                romper;
            caso relación_1.RelationshipTypes.Theme:
                este.themePart = parte = new theme_part_1.ThemePart(este._paquete, ruta);
                romper;
            caso relación_1.RelationshipTypes.Footnotes:
                this.footnotesPart = parte = new parts_2.FootnotesPart(this._package, path, this._parser);
                romper;
            caso relación_1.RelationshipTypes.Endnotes:
                este.endnotesPart = parte = new parts_2.EndnotesPart(este._paquete, ruta, este._parser);
                romper;
            caso relación_1.RelationshipTypes.Footer:
                parte = nuevas partes_1.FooterPart(este._paquete, ruta, este._parser);
                romper;
            caso relación_1.RelationshipTypes.Header:
                parte = new partes_1.HeaderPart(este._paquete, ruta, este._parser);
                romper;
            caso relación_1.RelationshipTypes.CoreProperties:
                este.corePropsPart = parte = new core_props_part_1.CorePropsPart(este._paquete, ruta);
                romper;
            caso relación_1.RelationshipTypes.ExtendedProperties:
                este.extendedPropsPart = parte = new extended_props_part_1.ExtendedPropsPart(este._paquete, ruta);
                romper;
            caso relación_1.RelationshipTypes.CustomProperties:
                parte = nueva custom_props_part_1.CustomPropsPart(este._paquete, ruta);
                romper;
            caso relación_1.RelationshipTypes.Settings:
                este.settingsPart = parte = new settings_part_1.SettingsPart(este._paquete, ruta);
                romper;
        }
        si (parte == nulo)
            devolver Promesa.resolve(null);
        this.partsMap[ruta] = parte;
        esto.partes.push(parte);
        devolver parte.load().then(() => {
            si (parte.rels == null || parte.rels.length == 0)
                parte de retorno;
            const [carpeta] = (0, utils_1.splitPath)(part.path);
            const rels = parte.rels.map(rel => {
                devuelve esto.loadRelationshipPart((0, utils_1.resolvePath)(rel.target, carpeta), rel.type);
            });
            devuelve Promise.all(rels).then(() => parte);
        });
    }
    cargarDocumentoImage(id, parte) {
        devuelve esto.loadResource(parte !== null && parte !== void 0 ? parte : esto.documentPart, id, "blob")
            .then(x => este.blobToURL(x));
    }
    cargarNumberingImage(id) {
        devuelve esto.loadResource(esto.numberingPart, id, "blob")
            .then(x => este.blobToURL(x));
    }
    loadFont(id, clave) {
        devuelve esto.loadResource(esto.fontTablePart, id, "uint8array")
            .then(x => x ? this.blobToURL(new Blob([desofuscar(x, clave)])) : x);
    }
    blobToURL(blob) {
        si (!blob)
            devuelve nulo;
        si (esto._opciones.useBase64URL) {
            devolver (0, utils_1.blobToBase64)(blob);
        }
        devolver URL.createObjectURL(blob);
    }
    findPartByRelId(id, basePart = nulo) {
        var _a;
        var rel = ((_a = basePart.rels) !== null && _a !== void 0 ? _a : this.rels).find(r => r.id == id);
        carpeta constante = basePart? (0, utils_1.splitPath)(basePart.path)[0] : '';
        devolver rel ? this.partsMap[(0, utils_1.resolvePath)(rel.target, carpeta)] : null;
    }
    getPathById(parte, id) {
        const rel = part.rels.find(x => x.id == id);
        const [carpeta] = (0, utils_1.splitPath)(part.path);
        devolver rel ? (0, utils_1.resolvePath)(rel.target, carpeta) : null;
    }
    loadResource(parte, id, tipoSalida) {
        constante path = this.getPathById(parte, id);
        ruta de retorno ? this._package.load(path, outputType) : Promise.resolve(null);
    }
}
exportaciones.WordDocument = WordDocument;
función desofuscar(datos, guidKey) {
    constante len = 16;
    constante recortada = guidKey.replace(/{|}|-/g, "");
    const números = nuevo Array(len);
    para (sea i = 0; i < len; i++)
        números[len - i - 1] = parseInt(trimmed.substr(i * 2, 2), 16);
    para (sea i = 0; i < 32; i++)
        datos[i] = datos[i] ^ números[i % len];
    devolver datos;
}
exportaciones.deofuscar = desofuscar;


/***/ }),

/***/ "datos:imagen/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 100%27 preserveAspectRatio=%27none%27%3E%3Cpath d=%27m0,75 l5,0 l5,25 l10,-100%27 trazo=%27negro%27 relleno=%27none%27 efecto-vectorial=%27trazo-sin-escalado%27/%3E%3C/svg%3E":
/*!*** ...
  !*** datos:imagen/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 100%27 preserveAspectRatio=%27none%27%3E%3Cpath d=%27m0,75 l5,0 l5,25 l10,-100%27 trazo=%27negro%27 relleno=%27none%27 efecto-vectorial=%27trazo-sin-escalado%27/%3E%3C/svg%3E ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((módulo) => {

módulo.exportaciones = "datos:imagen/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 100%27 preserveAspectRatio=%27none%27%3E%3Cpath d=%27m0,75 l5,0 l5,25 l10,-100%27 trazo=%27negro%27 relleno=%27none%27 efecto-vectorial=%27trazo-sin-escalado%27/%3E%3C/svg%3E";

/***/ }),

/***/ "jszip":
/*!******************************************************************************************!*\
  !*** externo {"raíz":"JSZip","commonjs":"jszip","commonjs2":"jszip","amd":"jszip"} ***!
  \***************************************************************************************/
/***/ ((módulo) => {

módulo.exportaciones = __WEBPACK_EXTERNAL_MODULE_jszip__;

/***/ })

/******/ });
/************************************************************************/
/******/ // La caché del módulo
/******/ var __webpack_module_cache__ = {};
/******/
/******/ // La función require
/******/ función __webpack_require__(moduleId) {
/******/ // Verificar si el módulo está en caché
/******/ var cachedModule = __webpack_module_cache__[moduleId];
/******/ si (cachedModule !== indefinido) {
/******/ devolver cachedModule.exports;
/******/ }
/******/ // Crea un nuevo módulo (y colócalo en el caché)
/******/ var módulo = __webpack_module_cache__[moduleId] = {
/******/ id: móduloId,
/******/ // no se necesita módulo cargado
/******/ exporta: {}
/******/ };
/******/
/******/ // Ejecutar la función del módulo
/******/ __webpack_modules__[moduleId](módulo, módulo.exports, __webpack_require__);
/******/
/******/ // Devuelve las exportaciones del módulo
/******/ devolver módulo.exports;
/******/ }
/******/
/******/ // exponer el objeto de módulos (__webpack_modules__)
/******/ __webpack_require__.m = __webpack_modules__;
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat obtener la exportación predeterminada */
/******/ (() => {
/******/ // Función getDefaultExport para compatibilidad con módulos que no son de Harmony
/******/ __webpack_require__.n = (módulo) => {
/******/ var getter = módulo && módulo.__esModule ?
/******/ () => (módulo['predeterminado']) :
/******/ () => (módulo);
/******/ __webpack_require__.d(obtenedor, { a: obtenedor });
/******/ devolver captador;
/******/ };
/******/ })();
/******/
/******/ /* webpack/runtime/define captadores de propiedades */
/******/ (() => {
/******/ // define funciones getter para exportaciones de armonía
/******/ __webpack_require__.d = (exportaciones, definición) => {
/******/ for(var clave en definición) {
/******/ if(__webpack_require__.o(definición, clave) && !__webpack_require__.o(exportaciones, clave)) {
/******/ Object.defineProperty(exportaciones, clave, { enumerable: verdadero, obtener: definición[clave] });
/******/ }
/******/ }
/******/ };
/******/ })();
/******/
/******/ /* webpack/runtime/hasOwnProperty abreviatura */
/******/ (() => {
/******/ __webpack_require__.o = (obj, prop) => (Objeto.prototipo.hasOwnProperty.call(obj, prop))
/******/ })();
/******/
/******/ /* webpack/runtime/make objeto de espacio de nombres */
/******/ (() => {
/******/ // define __esModule en las exportaciones
/******/ __webpack_require__.r = (exportaciones) => {
/******/ si (tipo de Símbolo !== 'indefinido' && Símbolo.toStringTag) {
/******/ Object.defineProperty(exportaciones, Symbol.toStringTag, { valor: 'Módulo' });
/******/ }
/******/ Object.defineProperty(exportaciones, '__esModule', { valor: verdadero });
/******/ };
/******/ })();
/******/
/******/ /* carga del fragmento webpack/runtime/jsonp */
/******/ (() => {
/******/ __webpack_require__.b = document.baseURI || self.location.href;
/******/
/******/ // objeto para almacenar fragmentos cargados y en carga
/******/ // indefinido = fragmento no cargado, nulo = fragmento precargado/precargado
/******/ // [resolver, rechazar, Promesa] = carga de fragmento, 0 = fragmento cargado
/******/ var installChunks = {
/******/ "vista previa del docx": 0
/******/ };
/******/
/******/ // no se carga ningún fragmento bajo demanda
/******/
/******/ // sin precarga
/******/
/******/ // sin precargado
/******/
/******/ // sin HMR
/******/
/******/ // no hay manifiesto HMR
/******/
/******/ // no hay fragmentos cargados
/******/
/******/ // sin función jsonp
/******/ })();
/******/
/************************************************************************/
/******/
/******/ // puesta en marcha
/******/ // Cargar módulo de entrada y devolver exportaciones
/******/ // Este módulo de entrada es referenciado por otros módulos, por lo que no se puede incluir en línea.
/******/ var __webpack_exports__ = __webpack_require__("./src/docx-preview.ts");
/******/
/******/ devolver __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=docx-preview.js.map