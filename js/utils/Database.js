import Dexie from "dexie";

let db = new Dexie("MemoReact");

db.version(1).stores({
	items: "id++,text,*completed,created"
});

db.open();

export default db;