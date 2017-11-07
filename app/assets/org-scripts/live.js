function stripeTables() {
  if (!document.getElementsByTagName) return false;
  const tables = document.getElementsByTagName('table');
  for (let i = 0; i < tables.length; i++) {
    let odd = false;
    const rows = tables[i].getElementsByTagName('tr');
    for (let j = 0; j < rows.length; j++) {
      if (odd == true) {
        addClass(rows[j], 'odd');
        odd = false;
      } else {
        odd = true;
      }
    }
  }
}

function highlightRows() {
  if (!document.getElementsByTagName) return false;
  const rows = document.getElementsByTagName('tr');
  for (let i = 0; i < rows.length; i++) {
    rows[i].oldClassName = rows[i].className;
    rows[i].onmouseover = function () {
      addClass(this, 'highlight');
    };
    rows[i].onmouseout = function () {
      this.className = this.oldClassName;
    };
  }
}

function displayAbbreviations() {
  if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
  const abbreviations = document.getElementsByTagName('abbr');
  if (abbreviations.length < 1) return false;
  const defs = new Array();
  for (let i = 0; i < abbreviations.length; i++) {
    const current_abbr = abbreviations[i];
    if (current_abbr.childNodes.length < 1) continue;
    var definition = current_abbr.getAttribute('title');
    var key = current_abbr.lastChild.nodeValue;
    defs[key] = definition;
  }
  const dlist = document.createElement('dl');
  for (key in defs) {
    var definition = defs[key];
    const dtitle = document.createElement('dt');
    const dtitle_text = document.createTextNode(key);
    dtitle.appendChild(dtitle_text);
    const ddesc = document.createElement('dd');
    const ddesc_text = document.createTextNode(definition);
    ddesc.appendChild(ddesc_text);
    dlist.appendChild(dtitle);
    dlist.appendChild(ddesc);
  }
  if (dlist.childNodes.length < 1) return false;
  const header = document.createElement('h3');
  const header_text = document.createTextNode('Abbreviations');
  header.appendChild(header_text);
  const container = document.getElementById('content');
  container.appendChild(header);
  container.appendChild(dlist);
}

addLoadEvent(stripeTables);
addLoadEvent(highlightRows);
addLoadEvent(displayAbbreviations);
