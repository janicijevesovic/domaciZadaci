export class ChatUI {
    constructor(unorderedList) {
        this.unorderedList = unorderedList;
    }

    // Seteri
    set unorderedList(unorderedList) {
        this._unorderedList = unorderedList;
    }

    // Geteri
    get unorderedList() {
        return this._unorderedList;
    }

    // Metode
    templateLI(data) {
        let date = data.created_at.toDate();
        let htmlLI;
        if (localStorage.username == data.username) {
            htmlLI = 
        `
            <li class="userMsg">
            <span class="username">${data.username} : </span>
            <span class="message">${data.message} </span>
            <div>${this.formatDate(date)}</div>
            </li>
        `;
        }
        else {
            htmlLI = 
            `
            <li>
            <span class="username">${data.username} : </span>
            <span class="message">${data.message} </span>
            <div>${this.formatDate(date)}</div>
            </li>
        `;
        }
        this.unorderedList.innerHTML += htmlLI;
        this.unorderedList.scrollTop = this.unorderedList.scrollHeight;
    }

    formatDate(date) {
        let trenutniDatum = new Date();
        let trenutniDan = trenutniDatum.getDate();
        let trenutniMesec = trenutniDatum.getMonth();

        let d = date.getDate();
        let m = date.getMonth();
        let g = date.getFullYear();
        
        if (trenutniDan == d && trenutniMesec == m) {
            let s = ('0' + date.getHours()).slice(-2);
            let min = ('0' + date.getMinutes()).slice(-2);
            return `${s}:${min}`;
        }
        else {
            let d = ('0' + date.getDate()).slice(-2);
            let m = ('0' + (date.getMonth() + 1)).slice(-2);
            let s = ('0' + date.getHours()).slice(-2);
            let min = ('0' + date.getMinutes()).slice(-2);
            return `${d}.${m}.${g}. - ${s}:${min}`;
        }
    }

    clear() {
        this.unorderedList.innerHTML = "";
    }
}
