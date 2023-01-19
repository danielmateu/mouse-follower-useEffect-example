import React, { useEffect, useState } from 'react'

export const FollowMouse = () => {

    const [enabled, setEnabled] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 });

    //Pointer move
    useEffect(() => {
        // console.log('Efecto', {enabled})
        const handleMove = (event) => {
            const { clientX, clientY } = event;
            setPosition({ x: clientX, y: clientY });
        }

        if (enabled) {
            addEventListener('pointermove', handleMove)
        }
        //Cleanup
        //Cuando el componente se desmonta. Se ejecuta cuando cambian las dependencias
        return () => {
            removeEventListener('pointermove', handleMove)
        }
    }, [enabled])

    //Change body classname
    useEffect(() => {
        document.body.classList.toggle('no-cursor', enabled);

        return () => {
            document.body.classList.remove('no-cursor');
        }
    }, [enabled])


    return (
        <>
            <div style={{
                position: 'absolute',
                backgroundColor: 'rgba(22, 51, 70, 0.555)',
                borderRadius: '50%',
                border: '4px solid white',
                opacity: .8,
                pointerEvents: 'none',
                left: -20,
                top: -20,
                width: 40,
                height: 40,
                transform: `translate(${position.x}px, ${position.y}px)`
            }} />


            <button
                onClick={() => setEnabled(!enabled)}
            >{enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>
        </>
    )
}
