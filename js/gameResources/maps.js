/*
 * Add all levels here
 */

gameResources.addMap = function addMap(name, source){
	this.maps.push({
		name: name,
		type: "tmx",
		src: source
	});
};

gameResources.addMap("egypt","data/Renaisannce.tmx");
gameResources.addMap("renaisannce","data/Renaisannce.tmx");
<<<<<<< HEAD
gameResources.addMap("spacemap","data/spacemap.tmx");
gameResources.addMap("level2","data/level2.tmx");
=======
//gameResources.addMap("spacemap","data/spacemap.tmx");
>>>>>>> c3dfd052a734a04c276763fd48caf56cf73862db
gameResources.addMap("level02","data/level02.tmx");
gameResources.addMap("level3","data/level3.tmx");
gameResources.addMap("level4","data/level4.tmx");