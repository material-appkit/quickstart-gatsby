/**
 * See: https://philipwalton.com/articles/normalizing-cross-browser-flexbox-bugs/
 */
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';

import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import Fab from '@material-ui/core/Fab';
import Hidden from '@material-ui/core/Hidden';
import Zoom from '@material-ui/core/Zoom';
import { makeStyles } from '@material-ui/core/styles';
import { isWidthUp } from '@material-ui/core/withWidth';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import Footer from './Footer';
import Header from './Header';

import AppContext from 'AppContext';

import ApplicationNavTree from './ApplicationNavTree';
import Seo from './seo';

const styles = makeStyles((theme) => ({
  rootContainer: {
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    minHeight: `calc(100vh - ${theme.appbar.height}px)`,

    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.navbar.width,

      transition: theme.transitions.create(['padding'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  },

  rootContainerShift: {
    paddingLeft: 0,

    transition: theme.transitions.create(['padding'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  fixedHeaderRootContainer: {
    minHeight: '100vh',
    paddingTop: theme.appbar.height,
  },

  contentContainer: {
    flex: 1,
    margin: 0,
    paddingTop: theme.spacing(2),
  },

  drawerModal: {
    zIndex: `${theme.zIndex.appBar - 1} !important`,
  },

  drawerPaper: {
    backgroundColor: theme.palette.grey[50],
    paddingTop: theme.appbar.height,
    width: theme.navbar.width,

    [theme.breakpoints.up('md')]: {
      zIndex: `${theme.zIndex.appBar - 1}`,
    },
  },

  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),

    '@media print': {
      display: 'none',
    },
  },
}));


const Layout = (props) => {
  const classes = styles();

  const {
    children,
    contentContainerClassName,
    fixedHeader,
    location,
    showBackButton,
  } = props;

  const context = useContext(AppContext);
  const { breakpoint } = context;

  const isWidthMediumUp = breakpoint ? isWidthUp('md', breakpoint) : true;

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [desktopDrawerOpen, setDesktopDrawerOpen] = useState(true);

  const rootContainerClasses = [classes.rootContainer];
  if (fixedHeader) {
    rootContainerClasses.push(classes.fixedHeaderRootContainer);
  }
  if (!desktopDrawerOpen) {
    rootContainerClasses.push(classes.rootContainerShift);
  }

  const handleApplicationLogoClick = () => {
    if (isWidthMediumUp) {
      setDesktopDrawerOpen(!desktopDrawerOpen);
    } else {
      setMobileDrawerOpen(!mobileDrawerOpen);
    }
  };

  let fabButton = null;
  if (!isWidthMediumUp && showBackButton) {
    fabButton = (
      <Zoom
        in
        style={{ transitionDelay: `1500ms` }}
        unmountOnExit
      >
        <Fab
          aria-label="Back Button"
          className={classes.fab}
          onClick={() => window.history.back()}
        >
          <ChevronLeftIcon fontSize="large" />
        </Fab>
      </Zoom>
    );
  }

  const applicationNavTree = <ApplicationNavTree location={location} />;

  return (
    <>
      <Seo title={props.pageTitle || props.title} />

      {fabButton}

      <Header
        fixed={fixedHeader}
        isWidthMediumUp={isWidthMediumUp}
        loading={props.loading}
        onApplicationLogoClick={handleApplicationLogoClick}
        showBackButton={showBackButton}
        title={props.title}
      />

      <div className={clsx(rootContainerClasses)}>
        <Container
          className={clsx(classes.contentContainer, contentContainerClassName)}
          maxWidth="md"
        >
          {children}
        </Container>

        <Footer location={location} sitemap={context.sitemap} />
      </div>

      <Hidden mdUp implementation="css">
        <Drawer
          anchor="left"
          classes={{
            modal: classes.drawerModal,
            paper: classes.drawerPaper,
          }}
          ModalProps={{ keepMounted: true }}
          open={mobileDrawerOpen}
          onClose={() => setMobileDrawerOpen(false)}
          variant="temporary"
        >
          {applicationNavTree}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          anchor="left"
          classes={{ paper: classes.drawerPaper }}
          variant="persistent"
          open={desktopDrawerOpen}
        >
          {applicationNavTree}
        </Drawer>
      </Hidden>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  contentContainerClassName: PropTypes.string,
  fixedHeader: PropTypes.bool,
  loading: PropTypes.bool,
  location: PropTypes.object.isRequired,
  pageTitle: PropTypes.string,
  showBackButton: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

Layout.defaultProps = {
  fixedHeader: true,
  showBackButton: true,
  loading: false,
};

export default Layout;
