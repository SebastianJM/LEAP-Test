// Solución en C++

#include <iostream>
#include <math.h>

using namespace std;

// Estructura rectángulo
struct rect
{
	float centerX,centerY;
	float width, height;
	float xmin,xmax;
	float ymin,ymax;
	rect(float cenX,float cenY,float w,float h):centerX(cenX),centerY(cenY),width(w),height(h)
	{
		xmin=centerX-width/2;
		xmax=centerX+width/2;
		ymin=centerY-height/2;
		ymax=centerY+height/2;
	}
};

// Intersección entre dos rectángulos
bool intersect(rect r1, rect r2)
{
	if(r1.xmin < r2.xmax && r1.xmax > r2.xmin &&
	r1.ymin < r2.ymax && r1.ymax > r2.ymin)
		return true;
	return false;
}

// Intersección entre tres triángulos
void three_rect_intersect(rect A,rect B, rect C)
{
	if(intersect(A,B))
		cout<<"Intersect between A and B\n";
	if(intersect(B,C))
		cout<<"Intersect between B and C\n";
	if(intersect(A,C))
		cout<<"Intersect between A and C\n";
}
int main() 
{
	rect A(0,0,10,1); // (xa,ya,wa,ha)
	rect B(10,0,11,6); // (xb,yb,wb,hb)
	rect C(10,10,1,14.01); // (xc,yc,wc,hc)
	three_rect_intersect(A,B,C);
	return 0;
}
