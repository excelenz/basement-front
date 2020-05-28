import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { notEqual } from 'assert';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List';
import FormGroup from '@material-ui/core/FormGroup'
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField'
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel'


const styles = theme => ({
  text: {
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing.unit * 2,
    alignItems: 'flex-end',
    width: '100%',
  },
  centering: {
    alignContent: 'flex-end'
  },
  subHeader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: '#00b6b0',
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  root: {
    flexGrow: 1,
  },
});


class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClosePeople = () => {
    this.props.onPeople();
    this.setState({ anchorEl: null });
  };
  handleCloseOrg = () => {
    this.props.onOrg();
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
          <IconButton color="inherit" aria-label="Open drawer" aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
>
            <MenuIcon />
          </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClosePeople}>People</MenuItem>
          <MenuItem onClick={this.handleCloseOrg}>Organisations</MenuItem>
        </Menu>
      </div>
    );
  }
}

class OrgContact extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          editing: false,
          id: props.id,
          name: props.name,
          phone: props.phone,
          address: props.address,
          pic: props.pic,
      }
      this.edit = this.edit.bind(this)
      this.remove = this.remove.bind(this)
      this.renderEdit = this.renderEdit.bind(this)
      this.renderDisplay = this.renderDisplay.bind(this)
      this.save = this.save.bind(this)
      this.listOfPeople = this.listOfPeople.bind(this)
  }


    edit() {
      this.setState({
          editing: true
      })
    }

    remove() {
      this.props.onRemove(this.props.id)
    }

    save(e) {
      e.preventDefault()
      this.props.onChange(this.props.id, this.state.name, this.state.phone, this.state.address, this.state.pic)
      this.setState({
        editing: false
      })
    }

    listOfPeople() {
      var peopleObj =  this.props.ppl.filter(person => person.org_id === this.state.id)
      let result = peopleObj.map(a => a.name);
      var outputStr = ""
      if (result.length>0) {
        outputStr = result[0]
        for (var i = 1; i<result.length; i++) {
          outputStr = outputStr + ", " + result[i]
        }
      }
      return outputStr

    }

renderDisplay() {
  if (this.listOfPeople() == "") {
    return (
      <div>
              <ListItem divider>
                <Avatar alt="Profile Picture" src={this.props.pic} />
                <ListItemText primary={this.props.name} secondary={
                  <div>
                    <div>{this.props.phone}</div>
                    <div>{this.props.address}</div>
                  </div>
                } />
              <IconButton onClick = {this.edit} color="inherit">
                <EditIcon />
              </IconButton>
              <IconButton onClick = {this.remove} color="inherit">
                <DeleteIcon />
              </IconButton>
              </ListItem>
      </div>
    )
  }
  else {
    return (
      <div>
              <ListItem divider>
                <Avatar alt="Profile Picture" src={this.props.pic} />
                <ListItemText primary={this.props.name} secondary={
                  <div>
                    <div>{this.props.phone}</div>
                    <div>{this.props.address}</div>
                    <b>People at this Organisation: </b>
                    <div>{this.listOfPeople()}</div>
                  </div>
                } />
              <IconButton onClick = {this.edit} color="inherit">
                <EditIcon />
              </IconButton>
              <IconButton onClick = {this.remove} color="inherit">
                <DeleteIcon />
              </IconButton>
              </ListItem>
      </div>
    )
  }

}

nameChange = event => {
  this.setState({ name: event.target.value })
}
phoneChange = event => {
  this.setState({ phone: event.target.value })
}
addressChange = event => {
  this.setState({ address: event.target.value })
}
picChange = event => {
  this.setState({ pic: event.target.value })
}

renderEdit() {
  return (
    <div>
            <ListItem divider>
            <form onSubmit={this.save} noValidate autoComplete="off">
              <TextField id = "name-form" label= "Name" defaultValue={this.state.name} onChange={this.nameChange} margin="normal" />
              <TextField id = "phone-form"  label= "Phone Number" defaultValue={this.state.phone} onChange={this.phoneChange} margin="normal" />
              <TextField id = "address-form"  label= "Address" fullWidth defaultValue={this.state.address} onChange={this.addressChange} margin="normal" />
              <TextField id = "pic-url" label= "Avatar URL" fullWidth onChange={this.picChange} defaultValue={this.state.pic} margin="normal" />
              <IconButton onClick = {this.save} color="inherit">
                <DoneIcon />
              </IconButton>

            </form>
            </ListItem>
    </div>
  )
}


render() {
  if(this.state.editing) {
    return this.renderEdit()
  }
  else {
    return this.renderDisplay()
  }
}

}


class PersonContact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            id: props.id,
            name: props.name,
            phone: props.phone,
            address: props.address,
            pic: props.pic,
            org_id: props.org_id
        }
        this.edit = this.edit.bind(this)
        this.remove = this.remove.bind(this)
        this.renderEdit = this.renderEdit.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
        this.save = this.save.bind(this)
        this.getOrgName = this.getOrgName.bind(this)
}


  edit() {
    this.setState({
        editing: true
    })
  }

  remove() {
    this.props.onRemove(this.props.id)
  }

  save(e) {
    e.preventDefault()
    this.props.onChange(this.props.id, this.state.name, this.state.phone, this.state.address, this.state.pic, this.state.org_id)
    this.setState({
      editing: false
    })
  }

  getOrgName(id) {
    var y = this.props.orgs.find(x => x.id === id);
    console.log(y)
    if (id == 0 || y.id == undefined) {
      return "";
    }
    else {
      return ", " + y.name
    }
  }

  renderDisplay() {
    let MuiAvatarnew='MuiAvatar-root-new';
    return (
      <div>
              <ListItem divider>
                <Avatar alt="Profile Picture" className={MuiAvatarnew} src={this.props.pic} />
                <ListItemText primary={
                <div>{this.props.name}<i>{this.getOrgName(this.props.org_id)}</i></div>
              }
                secondary={
                  <div>
                    <div>{this.props.phone}</div>
                    <div>{this.props.address}</div>
                  </div>
                } />
              <IconButton onClick = {this.edit} color="inherit">
                <EditIcon />
              </IconButton>
              <IconButton onClick = {this.remove} color="inherit">
                <DeleteIcon />
              </IconButton>
              </ListItem>
      </div>
    )
  }

  nameChange = event => {
    this.setState({ name: event.target.value })
  }
  phoneChange = event => {
    this.setState({ phone: event.target.value })
  }
  addressChange = event => {
    this.setState({ address: event.target.value })
  }
  picChange = event => {
    this.setState({ pic: event.target.value })
  }

  orgChange = event => {
    console.log("org changed")
    this.setState({ org_id: event.target.value });
  };

  renderEdit() {
    return (
      <div>
              <ListItem divider>
              <form onSubmit={this.save} noValidate autoComplete="off">
                <TextField id = "name-form" label= "Name" defaultValue={this.state.name} onChange={this.nameChange} margin="normal" />
                <TextField id = "phone-form"  label= "Phone Number" defaultValue={this.state.phone} onChange={this.phoneChange} margin="normal" />
                <TextField id = "address-form"  label= "Address" fullWidth defaultValue={this.state.address} onChange={this.addressChange} margin="normal" />
                <TextField id = "pic-url" label= "Avatar URL" fullWidth onChange={this.picChange} defaultValue={this.state.pic} margin="normal" />
                <InputLabel htmlFor="org-simple">Organisation</InputLabel>
                <Select fullWidth
                  value={this.state.org_id}
                  onChange={this.orgChange}
                 >
            <MenuItem value="0">
              <em>None</em>
            </MenuItem>
            {this.props.orgs.map(({ id, name }) => (
                <MenuItem value={id}>{name}</MenuItem>
              ))}
          </Select>
                <IconButton onClick = {this.save} color="inherit">
                  <DoneIcon />
                </IconButton>
              </form>
              </ListItem>
      </div>
    )
  }


  render() {
    if(this.state.editing) {
      return this.renderEdit()
    }
    else {
      return this.renderDisplay()
    }
  }

}


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      pplView: true,
      orgs: [],
      people: [],

    }
    this.addPerson = this.addPerson.bind(this)
    this.updatePerson = this.updatePerson.bind(this)
    this.removePerson = this.removePerson.bind(this)
    this.peopleView = this.peopleView.bind(this)
    this.orgView = this.orgView.bind(this)
    this.setOrg = this.setOrg.bind(this)
    this.setPpl = this.setPpl.bind(this)
    this.updateOrg = this.updateOrg.bind(this)
    this.removeOrg = this.removeOrg.bind(this)
    this.putOrgData = this.putOrgData.bind(this)
    this.addOrg = this.addOrg.bind(this)
    this.postOrgData = this.postOrgData.bind(this)
    this.deletePplData = this.deletePplData.bind(this)
    this.deleteOrgData = this.deleteOrgData.bind(this)
    this.refreshPpl = this.refreshPpl.bind
  }

  componentWillMount() {
    var self = this
    fetch('http://localhost:5000/api/Org')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      self.setOrg(myJson)
    });
    fetch('http://localhost:5000/api/Entry')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      self.setPpl(myJson)
    });
  }

  setOrg(data) {
    console.log(data)
    this.setState(prevState => ({
      orgs: data.data
    }))
  }

  refreshPpl() {
    var self = this
    console.log("refreshing db")
    fetch('http://localhost:5000/api/Entry')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      self.setPpl(myJson)
    });
  }

  setPpl(data) {
    console.log(data)
    this.setState(prevState => ({
      people: data.data
    }))
  }

  addPerson() {

    var maxId = Math.max.apply(Math, this.state.people.map(function(o) { return o.id; }))
    if (maxId < 0) {
      maxId = 0
    }


    this.setState(prevState => ({
      people: [
        ...prevState.people,
        {
          id: (maxId + 1),
          name: "",
          address: "",
          phone: "",
          pic: "",
          org_id: 0
        }
      ]
    }), () => {
      this.postPplData(maxId + 1)
    })
  }

  postPplData(id) {
    var person = this.state.people.find(person => {
      return person.id === id
    })
    console.log(person)
    fetch('http://localhost:5000/api/Entry', {
      method: 'POST',
      headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(person,function (key, value) {
        return (value == null) ? "" : value
    } )
    })

  }

  addOrg() {

    var maxId = Math.max.apply(Math, this.state.orgs.map(function(o) { return o.id; }))

    this.setState(prevState => ({
      orgs: [
        ...prevState.orgs,
        {
          id: (maxId + 1),
          name: "",
          address: "",
          phone: "",
          pic: ""
        }
      ]
    }), () => {
      this.postOrgData(maxId + 1)
    })
  }

  postOrgData(id) {
    var org = this.state.orgs.find(org => {
      return org.id === id
    })
    fetch('http://localhost:5000/api/Org', {
      method: 'POST',
      headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(org,function (key, value) {
        return (value == null) ? "" : value
    } )
    })

  }

  updatePerson(id, newname, newphone, newaddress, newpic, neworg) {
    console.log("updating")
    this.setState(prevState => ({
      people: prevState.people.map(
        person => (person.id !== id) ? person : {id: id, name: newname, address: newaddress, phone: newphone, pic: newpic, org_id: neworg}
      )
    }), () => {
      this.putPplData(id)
    })

  }

  putPplData(id) {
    var person = this.state.people.find(person => {
      return person.id === id
    })
    console.log(person)
    console.log(JSON.stringify(person,function (key, value) {
      return (value == null) ? "" : value
  } ))
    fetch('http://localhost:5000/api/Entry', {
      method: 'PUT',
      headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(person,function (key, value) {
        return (value == null) ? "" : value
    } )
    })

  }

  updateOrg(id, newname, newphone, newaddress, newpic) {
    console.log("updating org")
    this.setState(prevState => ({
      orgs: prevState.orgs.map(
        org => (org.id !== id) ? org : {id: id, name: newname, address: newaddress, phone: newphone, pic: newpic}
      )
    }), () => {
      this.putOrgData(id)
    })
  }

  putOrgData(id) {
    var org = this.state.orgs.find(org => {
      return org.id === id
    })
    console.log(org)
    console.log(JSON.stringify(org,function (key, value) {
      return (value == null) ? "" : value
  } ))
    fetch('http://localhost:5000/api/Org', {
      method: 'PUT',
      headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(org,function (key, value) {
        return (value == null) ? "" : value
    } )
    })

  }

  removeOrg(id) {
    this.deleteOrgData(id)
    console.log('removing org', id)
    this.setState(prevState => ({
      orgs: prevState.orgs.filter(org => org.id !== id)
    }))
  }

  deleteOrgData(id) {
    var org = this.state.orgs.find(org => {
      return org.id === id
    })
    console.log(org)
    fetch('http://localhost:5000/api/Org', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(org,function (key, value) {
        return (value == null) ? "" : value
    } )
    })
  }

  removePerson(id) {
    this.deletePplData(id)
    console.log('removing', id)
    this.setState(prevState => ({
      people: prevState.people.filter(person => person.id !== id)
    }))
  }

  deletePplData(id) {
    var person = this.state.people.find(person => {
      return person.id === id
    })
    console.log(person)
    fetch('http://localhost:5000/api/Entry', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(person,function (key, value) {
        return (value == null) ? "" : value
    } )
    })
  }

  peopleView() {
    this.setState(prevState => ({
      pplView: true
    }))
  }

  orgView() {
    this.setState(prevState => ({
      pplView: false
    }))
  }

  render() {

    const { classes } = this.props;

    if (this.state.pplView) {
      return (
        <React.Fragment>
          <CssBaseline />
          <Paper square className={classes.paper}>
          <AppBar position="static" color="default">
        <Toolbar>
         dsadasd
        </Toolbar>
      </AppBar>

            <List className={classes.list}>
              {this.state.people.map(({ id, name, phone, address, pic, org_id}) => (
                <PersonContact id={id} name={name} phone={phone} address={address} pic={pic} org_id={org_id} orgs={this.state.orgs} onChange={this.updatePerson} onRemove={this.removePerson} />

              ))}
            </List>
          </Paper>
          <AppBar position="fixed" color="primary" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
              <SimpleMenu onPeople={this.peopleView} onOrg={this.orgView} />
              <Fab color="secondary" aria-label="Add" className={classes.fabButton} onClick={this.addPerson}>
                <AddIcon />
              </Fab>
            </Toolbar>
          </AppBar>
        </React.Fragment>
      );
    }
    else {
      return (
        <React.Fragment>
          <CssBaseline />
          <Paper square className={classes.paper}>
            <Typography className={classes.text} variant="h5" gutterBottom>
              Address.io
            </Typography>
            <List className={classes.list}>
              {this.state.orgs.map(({ id, name, phone, address, pic }) => (
                <OrgContact id={id} name={name} phone={phone} address={address} pic={pic} ppl={this.state.people} onChange={this.updateOrg} onRemove={this.removeOrg} />

              ))}
            </List>

          </Paper>
          <AppBar position="fixed" color="primary" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
              <SimpleMenu onPeople={this.peopleView} onOrg={this.orgView} />
              <Fab color="secondary" aria-label="Add" className={classes.fabButton} onClick={this.addOrg}>
                <AddIcon />
              </Fab>
            </Toolbar>
          </AppBar>
        </React.Fragment>
      );

    }
  }
}

export default withStyles(styles)(App);
