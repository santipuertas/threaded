function exportar (data, fileName) {
    const a = document.createElement("a");
    const contenido = data,
        blob = new Blob([contenido], {type: "octet/stream"}),
        url = URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
  };

  document.querySelector('#exportar').onclick = function () {
    const data = "export const email = " + "'" + document.querySelector('#email').value+ "'" + "\n" + "export const password = " + "'"+ document.querySelector("#contra").value + "'";
    const nombreArchivo = "user.js"
    exportar(data, nombreArchivo);
  }