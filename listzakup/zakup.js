export class Zakup {
	constructor() {
		this._data = {
			id: '',
			nazwa: '',
			ilość: '',
			zrobione: 'false',
			
			
		};
	}



	
	   
	ustaw(id,nazwa,ilos,zrob) {
		this._data['id'] =id;
		this._data['nazwa'] = nazwa;
		this._data['ilość'] = ilos;
		this._data['zrobione'] = zrob;
	
	}
	zmien()
	{
		
		if(this._data['zrobione']=='false')
			this._data['zrobione']='true';
		else
			this._data['zrobione']='false';
		
	}
	
	

	
}