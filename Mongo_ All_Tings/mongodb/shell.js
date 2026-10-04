// mongosh
// use college
db = db.getSiblingDB("college");

print(db.getName());
printjson(db.adminCommand({ listDatabases: 1 }));
