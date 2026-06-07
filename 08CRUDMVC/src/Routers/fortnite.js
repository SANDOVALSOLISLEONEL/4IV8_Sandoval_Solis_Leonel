const express = require('express');
const router = express.Router();
const db = require('../DB/database');

router.get('/jugadores', async (req, res) => {
    try {
        const [data] = await db.execute(
            'SELECT * FROM fortnite_jugadores ORDER BY id ASC'
        );

        res.json({
            status: 'success',
            data,
            count: data.length
        });

    } catch (error) {

    console.log('ERROR FORTNITE');
    console.log(error);

    res.status(500).json({
        status:'error',
        message:error.message,
        error:error
    });
}
});

router.get('/jugadores/:id', async (req, res) => {
    try {
        const [data] = await db.execute(
            'SELECT * FROM fortnite_jugadores WHERE id=?',
            [req.params.id]
        );

        if (!data.length) {
            return res.status(404).json({
                status: 'error',
                message: 'Jugador no encontrado'
            });
        }

        res.json({
            status: 'success',
            data: data[0]
        });

    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

router.post('/jugadores', async (req, res) => {
    try {

        const { nombre, nivel } = req.body;

        const [result] = await db.execute(
            'INSERT INTO fortnite_jugadores(nombre,nivel) VALUES (?,?)',
            [nombre, nivel]
        );

        res.status(201).json({
            status: 'success',
            id: result.insertId
        });

    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

router.put('/jugadores/:id', async (req, res) => {
    try {

        const { nombre, nivel } = req.body;

        await db.execute(
            'UPDATE fortnite_jugadores SET nombre=?, nivel=? WHERE id=?',
            [nombre, nivel, req.params.id]
        );

        res.json({
            status: 'success'
        });

    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});


router.delete('/jugadores/:id', async (req, res) => {
    try {
        await db.execute(
    'DELETE FROM fortnite_partidas WHERE jugador_id=?',
    [req.params.id]
);

        await db.execute(
            'DELETE FROM fortnite_jugadores WHERE id=?',
            [req.params.id]
        );

        res.json({
            status: 'success'
        });

    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

router.get('/partidas', async (req, res) => {
    try {

        const [data] = await db.execute(`
            SELECT
             p.id,
             p.jugador_id,
            j.nombre jugador,
            p.eliminaciones,
            p.victoria,
            p.fecha_partida
            FROM fortnite_partidas p
            INNER JOIN fortnite_jugadores j
            ON p.jugador_id=j.id
            ORDER BY p.id DESC
        `);

        res.json({
            status:'success',
            data,
            count:data.length
        });

    } catch (error) {
        res.status(500).json({
            status:'error',
            message:error.message
        });
    }
});

router.post('/partidas', async (req, res) => {
    try {

        const { jugador_id, eliminaciones, victoria } = req.body;

        const [result] = await db.execute(
            'INSERT INTO fortnite_partidas(jugador_id,eliminaciones,victoria) VALUES (?,?,?)',
            [jugador_id, eliminaciones, victoria]
        );

        res.status(201).json({
            status:'success',
            id:result.insertId
        });

    } catch (error) {
        res.status(500).json({
            status:'error',
            message:error.message
        });
    }
});

router.put('/partidas/:id', async (req, res) => {
    try {

        const { jugador_id, eliminaciones, victoria } = req.body;

        await db.execute(
            'UPDATE fortnite_partidas SET jugador_id=?, eliminaciones=?, victoria=? WHERE id=?',
            [jugador_id, eliminaciones, victoria, req.params.id]
        );

        res.json({
            status:'success'
        });

    } catch (error) {
        res.status(500).json({
            status:'error',
            message:error.message
        });
    }
});

router.delete('/partidas/:id', async (req, res) => {
    try {

        await db.execute(
            'DELETE FROM fortnite_partidas WHERE id=?',
            [req.params.id]
        );

        res.json({
            status:'success'
        });

    } catch (error) {
        res.status(500).json({
            status:'error',
            message:error.message
        });
    }
});

module.exports = router;