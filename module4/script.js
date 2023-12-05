var names=new Array();
names[0]="Uma";
names[1]="Jeevan";
names[2]="Jeet";
names[3]="jasmin";
names[4]="paul";
names[5]="veena";
names[6]="lasya";
names[7]="kavya";
names[8]="lena";
names[9]="jitin";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}