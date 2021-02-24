import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    maxWidth: 345,
    maxHeight: '100%',
    margin: 'auto',
  },
  media: {
    height: '150%',
    maxWidth: '100%',
    paddingTop: '56.25%',
    objectFit: 'cover',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '200%',
    width: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
    height: '50px'
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  headersection: {
    position: 'relative',
    bottom: '5px',
    top: '5px',
    height: '50px',
  },
});