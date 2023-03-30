/*
!DTO's:
Los DTO es abreviatura para referirnos a los Data Transfer Objects. Son objetos que se utilizan para transferir datos entre diferentes capas de una aplicación. En este caso, vamos a utilizarlos para transferir datos entre el controlador y el servicio.

Teníamos los siguientes datos:
{
  "id": 1,
  "title": "Camisa",
  "price": 100
  "createdAt": 2021-08-10T20:00:00.000Z,
  "updatedAt": 2021-08-10T20:00:00.000Z
}

Sin embargo, al momento de la creación no los necesitabamos el id, el createdAt y updatedAt que se crean automáticamente.

Entonces vamos a omitir estos campos q si bien siguen con la entidad al momento de la creación no los necesitamos ya que, por ejemplo, los inserta automaticamente la base de datos. En el resultado nos tiene que llegar también estos datos.

Estos datos se los llama DTO's o datos de transferencia de objetos.

Vamos a aplicarlo en los modelos de datos de producto.
Omit<ProductInterface, 'id' | 'createdAt' | 'updatedAt'>

También queremos omitir crear una nueva categoría pq cuando creamos un producto, en realidad la relacionamos a una categoría ya creada.

Una buena práctica es que los DTO's tengan su propio archivo.

En addProducts cambiamos el tipo de dato de ProductInterface a CreateProductDTO ya que ya no vamos a necesitar recibir todos los datos sino tan solo los necesarios que se indican en el dto.

Así que podemos omitir algunos parámetros o campos que en ese particular momento no hacen falta, esto no significa que no están el objeto, sino que al momento de la creación solo necesitamos ciertos parámetros y la API, la base de datos se encargará de insertar lo demás.

? Con omit podemos omitir las propiedades, campos o llaves que quieramos.
*/

// interface InterfaceName extends Omit<TypeOrInterface, keyToOmit1 | ... | keyToOmitN> {
// 	statements
// }

// type typeNameDto = Omit<TypeOrInterface, keyToOmit1 | ... | keyToOmitN>

/*
? Pick:
Es lo contrario de Omit, aquí yo elijo los campos que quiero que estén en mi type o interface.

interface InterfaceName extends Pick<TypeOrInterface, keyToPick1 | ... | keyToPickN> {
	statements
}

type typeNameDto = Pick<TypeOrInterface, keyToPick1 | ... | keyToPickN>


Una buena práctica es que los DTOs tengan su propio archivo.
*/
