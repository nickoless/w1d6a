var fs = require ("fs");
var buf = new Buffer(1024);

console.log("Going to open an existing file");
fs.open(process.argv[2], 'r+', function(err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log("File has been opened!");
  console.log("Let's have a read");
  fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
    if (err){
      condole.log(err);
    }
    console.log(bytes + " bytes read, check it out:\n");
    if(bytes > 0) {
      console.log(buf.slice(0, bytes).toString());
    }
  });
});
