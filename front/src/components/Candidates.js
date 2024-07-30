import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/candidates"; 
import {
    Grid,
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    ButtonGroup,
    Button,
} from "@mui/material"; 
import { makeStyles } from "@mui/styles"; 
import EditIcon from "@mui/icons-material/Edit"; 
import DeleteIcon from "@mui/icons-material/Delete";
import { useToasts } from "react-toast-notifications";
import { candidate } from "../reducers/candidate";
import CandidateForm from "./CandidateForm";

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTableCell-head": {
            fontSize: "1.25rem",
        },
    },
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(2),
    },
}));

const Candidates = ({ ...props }) => {
    const classes = useStyles();
    const [currentId, setCurrentId] = useState(0);

    useEffect(() => {
        props.fetchAllDCandidates();
    }, []); // componentDidMount

    //toast msg
    const { addToast } = useToasts();

    const onDelete = (id) => {
        if (window.confirm("Do you want to delete this record?"))
            props.deleteDCandidate(id, () =>
                addToast("Deleted successfully", { appearance: "info" })
            );
    };

    return (
        <Paper className={classes.paper} elevation={3}>
            <Grid container>
                <Grid item xs={6}>
                    <CandidateForm {...{ currentId, setCurrentId }} />
                </Grid>
                <Grid item xs={6}>
                    <TableContainer>
                        <Table>
                            <TableHead className={classes.root}>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Mobile</TableCell>
                                    <TableCell>Blood Group</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.dCandidateList.map((record, index) => (
                                    <TableRow key={index} hover>
                                        <TableCell>{record.fullName}</TableCell>
                                        <TableCell>{record.mobile}</TableCell>
                                        <TableCell>{record.bloodGroup}</TableCell>
                                        <TableCell>
                                            <ButtonGroup variant="text">
                                                <Button
                                                    onClick={() => {
                                                        setCurrentId(record.id);
                                                    }}
                                                >
                                                    <EditIcon color="primary" />
                                                </Button>
                                                <Button
                                                    onClick={() => onDelete(record.id)}
                                                >
                                                    <DeleteIcon color="secondary" />
                                                </Button>
                                            </ButtonGroup>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Paper>
    );
};

const mapStateToProps = (state) => ({
    candidateList: state.candidate.list, 
});

const mapActionToProps = {
    fetchAllDCandidates: actions.fetchAll,
    deleteCandidate: actions.Delete, 
};

export default connect(mapStateToProps, mapActionToProps)(Candidates);
