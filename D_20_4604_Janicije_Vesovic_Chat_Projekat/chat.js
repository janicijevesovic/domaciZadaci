export class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = database.collection('chats');
        this.unsub;
    }

    // Seteri
    set room(room) {
        this._room = room;
    }
    set username(username) {
        if (username.length >= 2 && username.length <= 10) {
            if (!username.trim().length) {
                alert("Username ne sme biti prazan string");
            }
            else {
                this._username = username;
            }
        }
        else {
            alert("Username mora biti izmedju 2 i 10 karaktera!")
        }
    }

    // Geteri
    get room() {
        return this._room;
    }
    get username() {
        return this._username;
    }

    // Metode
    async addChat(msg) {
        let date = new Date();
        let timestamp = firebase.firestore.Timestamp.fromDate(date);
        let newMessage = {
            message: msg,
            username: this.username,
            room: this.room,
            created_at: timestamp
        }
        let response = await this.chats.doc().set(newMessage);
        return response;
    }

    getChats(callback) {
        this.unsub = this.chats
            .where('room', '==', this.room)
            .orderBy('created_at', 'asc')
            .onSnapshot(snapshot => {
            // console.log(snapshot.docChanges());
            // Krecemo se nizom promena i trazimo one promene koje su izazvale dodavanje dokumenta (added)
            snapshot.docChanges().forEach(change => {
                if (change.type == "added") {
                    // console.log("Promena u bazi");
                    // console.log(change.doc.data()); // Ispsis dokumenata koji su dodati u bazu
                    callback(change.doc.data());
                }
            });
        });
    }

    updateUsername(username) {
        this.username = username;
        // Postavljamo vrednost u lokalnoj memoriji
        localStorage.setItem("username", username);
        // Prva vrednost - ime koje dajemo promenljivoj u lokalnoj memoriji
        // Druga vrednost - vrednost koju dodeljujemo
        // Uzimanje vrednosti iz lokalne memorije
        // localStorage.username

    }

    updateRoom(room) {
        this.room = room;
        localStorage.setItem("room", room);
        if (this.unsub) {
            this.unsub();
        } 
    }
}
