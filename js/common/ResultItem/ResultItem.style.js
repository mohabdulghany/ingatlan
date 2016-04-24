import { StyleSheet } from 'react-native';

import { COLOR_GREEN, COLOR_SEPARATOR } from '../../constants';

export default StyleSheet.create({
  root: {
    flex: 1,
    height: 30,
    marginHorizontal: 6,
    marginTop: 10,
    marginBottom: 15,
    flexDirection: 'row',
  },
  title: {
    //flex: 5,
  },
  price: {
    flex: 3,
  },
  rooms: {
    flex: 2,
  },
  date: {
    flexDirection: 'row',
  },
  dateText: {
    color: COLOR_GREEN,
  },
  left: {
    flex: 5,
    flexDirection: 'column',
  },
  right: {
    flex: 3,
    flexDirection: 'row',
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth * 2,
    backgroundColor: COLOR_SEPARATOR,
  },
  iconNew: {
    marginRight: 3,
    top: 2,
  },
});
