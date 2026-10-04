# MongoDB Class

MongoDB shell and Mongoose code from my class notes. Each file covers one topic.

## mongodb/ (mongosh)

| File | Topic |
|------|-------|
| `shell.js` | Shell, database |
| `bson_data.js` | BSON data |
| `collections.js` | Documents and collections |
| `insert_in_db.js` | insertOne, insertMany |
| `find_in_db.js` | find, findOne |
| `find_in_db_2.js` | Query operators ($gt, $in, $or) |
| `update_in_db.js` | updateOne, updateMany, replaceOne |
| `delete_in_db.js` | deleteOne, deleteMany, dropDatabase |
| `nesting.js` | Nested documents |

Run: `mongosh --file mongodb/find_in_db.js`

## mongoose/ (Node.js)

| File | Topic |
|------|-------|
| `mongoose.js` | Connection |
| `schema.js` | Schema |
| `models.js` | Models |
| `insert.js` | save, insertMany |
| `find.js` | find, findOne |
| `update.js` | updateOne, updateMany, findOneAndUpdate |
| `delete.js` | deleteOne, deleteMany |
| `schema_validations.js` | Schema validations |

Setup: `npm install`
Run: `node mongoose/insert.js` (press Ctrl + C to stop after it finishes)

MongoDB must be running on `mongodb://127.0.0.1:27017`.
