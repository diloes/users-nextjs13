## Cómo distinguir cliente y servidor

En esta nueva versión de NextJS todos los componentes, por defecto, son ejecutados en el servidor.

> Todos los componentes dentro del app directorio son React Server Components (RSC) de forma predeterminada, incluidos los archivos especiales y los componentes colocados . Esto le permite adoptar automáticamente los componentes del servidor sin trabajo adicional y lograr un gran rendimiento desde el primer momento.

En la terminal desde la que lanzamos el `npm run dev` nos aparecen los `console.log` que están
ejecutándose en el servidor. Y en la consola del navegador(devtools) nos aparecen los `console.log`
que está ejecutando el cliente.

Es decir, la terminal y todo lo que aparezca en esta es el servidor. Y la consola del navegador
es el cliente.
