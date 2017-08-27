// Hecho en C++

#include <iostream>
#include <math.h>

using namespace std;

#define PI (2*acos(0.0))

struct point 
{ 
	double x, y; 
	point(double px,double py):x(px),y(py){}
};

void rotate1(point p, double theta,point origin) // Rota alrededor del origen, luego suma coordenadas del punto eje
{
	double rad = theta * PI / 180.0; // A Radianes 
	// Matriz de rotacion:
	printf("%.4lf %.4lf\n",p.x * cos(rad) - p.y * sin(rad)+origin.x,p.x * sin(rad) + p.y * cos(rad)+origin.y);
}
void rotate2(double theta,double radio,point origin) // Otra forma de rotar (sin matriz de rotación)
{
	double rad = theta * PI / 180.0; // A Radianes 
	printf("%.4lf %.4lf\n",cos(rad)*radio+origin.x,sin(rad)*radio+origin.y);
}
int main() 
{
	point P(2,2); // Punto central
	int n=4; // Cantidad de puntos a imprimir
	double radio=5.0; // Radio de la semicircunferencia
	
	double ang=180.0/n;
	point p0(radio,0); // Punto pivot
	
	for(int i=0;i<n;i++)
		rotate1(p0,ang*i,P);
	
	return 0;
}
