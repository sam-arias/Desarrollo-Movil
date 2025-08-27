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
      <ScrollView style={styles.container}>
        <View>
          <Image
            source={{uri: 'https://cdn-icons-png.flaticon.com/512/6073/6073874.png'}}
            style={styles.imagen} // Se crea el estilo
            resizeMode='cover'
          />
          <Text style={styles.text}>Mi perfil de usuario</Text>
          <Text style={styles.text}>Mi aplicación demo de react</Text>
        </View>

        <View>
          <Text style={styles.header}>Nombre</Text>
          <TextInput
            value={nombre}
            onChangeText={this.changeNameState}
            placeholder='Ingrese su nombre'
            placeholderTextColor='#999'
          />

          <Text style={styles.header}>Apellido</Text>
          <TextInput
            value={apellido}
            onChangeText={this.changeLastNameState}
            placeholder='Ingrese su apellido'
            placeholderTextColor='#999'
          />

          <Text style={styles.header}>Email</Text>
          <TextInput
            value={email}
            onChangeText={this.changeEmailState}
            placeholder='Ingrese su email'
            placeholderTextColor='#999'
          />
          
          <Text style={styles.header}>Télefono</Text>
          <TextInput
            value={telefono}
            onChangeText={this.changeTelefonoState}
            placeholder='Ingrese su teléfono'
            placeholderTextColor='#999'
          />

          <Text style={styles.header}>Descripción</Text>
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

          <Button style={styles.button}
            title='Limpiar Formulario'
            onPress={this.clearForm}
          />
        </View>

      </ScrollView>
      </>
    )
  }


}; // Cierre de la clase

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },

  header: {
    backgroundColor: '#4059e6ff',
    alignItems: 'center',
    marginBottom: 20,
    padding: 30
  },

  imagen: {
    width: 80,
    height: 80,
    borderRadius:30,
    marginBottom: 15,
    borderWidth: 4,
    borderColor: 'white'
  },

  button: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },

  text: {
    alignItems: 'center'
  }
})

export default App;
