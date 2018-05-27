import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class EventListEntry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
    };

    this.handleExpand = this.handleExpand.bind(this);
  }

  handleExpand() {
    this.setState({
      expanded: !this.state.expanded,
    })
  };

  render() {
    const { expanded } = this.state;
    const { classes, event } = this.props;
    return (
      <div className="event-list-entry-container">
        <ExpansionPanel expanded={expanded} onChange={this.handleExpand}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>{event.date} {event.category2}</Typography>
            <Typography className={classes.secondaryHeading}>{!expanded ? `${event.description.slice(0, 60)}...` : ''}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              {event.description}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    )
  }
};

export default withStyles(styles)(EventListEntry);