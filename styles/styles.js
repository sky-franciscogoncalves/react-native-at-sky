import { Platform, StyleSheet } from 'react-native';
import { Colors } from '../styles/colors';
import { AppConstants } from '../data/AppConstants';

export const buttonStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.button,
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  text: {
    fontSize: 18,
    color: Colors.button,
    fontFamily: 'sf-pro-text-light'
  }
});

export const loadingStyles = StyleSheet.create({ loading: { flex: 1, backgroundColor: Colors.background } });

export const movieDetailsCommonStyles = StyleSheet.create({
  titleBuyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    alignItems: 'center',
    marginTop: 8
  },
  movieInfoContainer: {
    marginHorizontal: 16
  },
  movieTitle: {
    color: Colors.text,
    fontSize: 25,
    flexShrink: 2,
    fontFamily: 'sf-pro-text-regular'
  },
  text: {
    color: Colors.text,
    marginBottom: 16,
    fontFamily: 'sf-pro-text-light'
  }
});

export const movieDetailsXsStyles = StyleSheet.flatten([
  movieDetailsCommonStyles,
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column'
    },
    image: {
      flexGrow: 0,
      height: Platform.select({
        web: `calc(100vw * ${AppConstants.aspectRatio})`,
        default: undefined
      })
    },
    movieInfoContainer: {
      marginHorizontal: 16
    }
  })
]);

export const movieDetailsLgStyles = StyleSheet.flatten([
  movieDetailsCommonStyles,
  StyleSheet.create({
    container: {
      flexDirection: 'row'
    },
    movieInfoContainer: {
      width: '50%',
      padding: 20
    },
    image: {
      width: '50%',
      height: `calc(50vw * ${AppConstants.aspectRatio})`
    }
  })
]);

export const moviePlayerStyles = Platform.select({
  web: {
    video: {
      height: '100vh',
      width: '100vw'
    }
  },
  default: StyleSheet.create({
    video: {
      flex: 1
    }
  })
});

export const moviesListStyles = Platform.select({
  web: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gridRowGap: '20px',
    gridColumnGap: '20px',
    backgroundColor: Colors.background,
    padding: 16
  }
});

export const movieListItemStyles = StyleSheet.create(
  Platform.select({
    web: {
      container: {
        margin: 10
      },
    },
    default: {
      container: {
        flex: 1,
        flexDirection: 'column',
        marginVertical: 16
      },
      movieInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 16,
        marginTop: 8,
        justifyContent: 'space-between',
        alignContent: 'center'
      },
      movieTitle: {
        color: Colors.text,
        fontSize: 18,
        fontFamily: 'sf-pro-text-regular'
      },
      arrow: {
        width: 16,
        height: 16
      }
    }
  })
);

export const titleValueTextStyles = StyleSheet.create({
  titleValueTextContainer: {
    flexDirection: 'row',
    marginBottom: 16
  },
  titleText: {
    color: Colors.text,
    width: 100,
    fontFamily: 'sf-pro-text-thin',
    fontSize: 16
  },
  valueText: {
    flex: 1,
    flexWrap: 'wrap',
    color: Colors.text,
    fontFamily: 'sf-pro-text-light'
  }
});

export const backgroundStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1
  }
});
