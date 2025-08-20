import React, {Component } from 'react'; 
import {View,Text,Image,ScrollView,TextInput,Button,StyleSheet,Alert} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = [
      nombre='',
      apellido='',
      email='',
      telefono='',
      descripcion='',
      mostrarPerfil = false,
      mensajeAprobacion='Perfil creado con éxito'
    ];
  }

  // Método para cambiar el nombre
  changeNameState = (texto) => {
    this.setState({
      nombre: texto, 
      mostrarPerfil: false,
      mensajeAprobacion: 'Informacion Actualizada'
    });
  };

  // Método para cambiar el apellido
  changeLastNameState = (texto) => {
    this.setState({
      apellido: texto, 
      mostrarPerfil: false,
      mensajeAprobacion: 'Informacion Actualizada'
    });
  };

  // Método para cambiar el email
  changeEmailState = (texto) => {
    this.setState({
      email: texto, 
      mostrarPerfil: false,
      mensajeAprobacion: 'Informacion Actualizada'
    });
  };

  // Método para cambiar el telefono
  changeTelefonoState = (texto) => {
    this.setState({
      telefono: texto, 
      mostrarPerfil: false,
      mensajeAprobacion: 'Informacion Actualizada'
    });
  };

  // Método para cambiar el descripción
  changeDescriptionState = (texto) => {
    this.setState({
      descripcion: texto, 
      mostrarPerfil: false,
      mensajeAprobacion: 'Informacion Actualizada'
    });
  };

  // Método para limpiar el formulario
  clearForm = () => {
    this.setState({
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      descripcion: '',
      mostrarPerfil: false,
      mensajeAprobacion: ''
    });

    Alert.alert(
      'Formulario Limpiado', // Titulo de la alerta
      'Todos los campos han sido borrados',
      [{text: 'OK'}]
    );

  };

  render() {
    const {
      nombre, 
      apellido, 
      email, 
      telefono, 
      descripcion, 
      mostrarPerfil
    } = this.state;

    return(
      <>
      <ScrollView>
        <View>
          <Image
            source={{uri: 'ruta de la imagen'}}
            // style={{width: 100, height: 100}} // Se crea el estilo
            resizeMode='cover'
          />
          <Text>Mi perfil de usuario</Text>
          <Text>Mi aplicación demo de react</Text>
        </View>

        <View>
          <Text>Nombre</Text>
          <TextInput
            value={nombre}
            onChangeText={this.changeNameState}
            placeholder='Ingrese su nombre'
            placeholderTextColor='#999'
          />

          <Text>Apellido</Text>
          <TextInput
            value={apellido}
            onChangeText={this.changeLastNameState}
            placeholder='Ingrese su apellido'
            placeholderTextColor='#999'
          />

          <Text>Email</Text>
          <TextInput
            value={email}
            onChangeText={this.changeEmailState}
            placeholder='Ingrese su email'
            placeholderTextColor='#999'
          />
          
          <Text>Télefono</Text>
          <TextInput
            value={telefono}
            onChangeText={this.changeTelefonoState}
            placeholder='Ingrese su teléfono'
            placeholderTextColor='#999'
          />

          <Text>Descripción</Text>
          <TextInput
            value={descripcion}
            onChangeText={this.changeDescriptionState}
            placeholder='Ingrese su descripción'
            placeholderTextColor='#999'
          />

        </View>

        <View>
          <Button
            title='Guardar Perfil'
            //onPress={} // Crear método para guardar
          />

          <Button
            title='Limpiar Formulario'
            onPress={this.clearForm}
          />
        </View>

      </ScrollView>
      </>
    )
  }


}; // Cierre de la clase

export default App;
