const React = require('react-native');

const { Dimensions, Platform } = React;


const deviceWidth = Dimensions.get('window').width;

export default {
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  contentContainer: {
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#01cca1'
  },
  headerLeft: {
    flex: 1
  },
  headerBody: {
    flex: 3
  },
  headerRight: {
    flex: 1
  },
  pageTitle: {
    color: '#fff',
    fontSize: 18,
  },
  cardContainer: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    marginBottom: 15,
  },
  cardItem: {
    flexDirection: 'row',
    padding: 10,
  },
  cardText: {
    flex: 1,
    color: '#222',
  },
  cardInstruction: {
    color: '#000',
  },
  callIcon: {
    paddingRight: 10,
    color: '#01cca1'
  },
  left: {
    flex: 1
  },
  body: {
    flexDirection: 'column',
    flex: 3
  },
  right: {
    flex: 1
  },
};
