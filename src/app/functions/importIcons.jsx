import { useEffect, useState } from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export default function ImportIcons (titleIcon) {
    const [icon, setIcon] = useState(faSpinner);
    
    useEffect(() => {
        const importIcon = async () => {
            try {
                const { [titleIcon]: importedIcon } = await import('@fortawesome/free-brands-svg-icons');
                setIcon(importedIcon);
                if (!importedIcon) {
                    const { [titleIcon]: importedIcon } = await import('@fortawesome/free-solid-svg-icons');
                    setIcon(importedIcon);
                }
            } catch (error) {
                console.error(`Error importing icon: ${error.message}`);
            }
        };

        importIcon();
    }, [titleIcon]);

    return icon;
}
