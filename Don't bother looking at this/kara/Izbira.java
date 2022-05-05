import java.util.Scanner;
public class Izbira
 {

    public static void main(String[] args) {
      Scanner scan = new Scanner(System.in);
      int n = 0;
      int z = 0;
      System.out.print("Vnesi pozitivno stevilko za siriono: ");
      n = scan.nextInt();
      System.out.println("\nIzberite obliko kare: \n1=polna, \n2=Prazna, \n3=zmaj: ");
      z = scan.nextInt();
      if (z!=1 || z!=2 || z!=3); 
      System.out.println("Vnesite samo 1-3");
      scan.close(); 
      Kara(n,z);
    }
      private static void Kara(int n,int z){
        if (n<=0)
        System.out.println("Vnesi pozitivno stevilo");
      //Višina1
      if (z==1){
      for (int i = 1; i <= n-n/2; ++i) {
        //Širina1
        for (int p = 1; p <= n - i; ++p) {
          System.out.print(" ");
        }
  //Pika1
        for (int p = 1; p <= 2*i-1; p++) {
          System.out.print("*");
          
        }
  
        System.out.println();
      }
      //Višina2
      for(int i=n-(n/2)-1; i >= 1; i--) {
          //Širina2
        for(int j=n-1; j >= i; j--) {
           System.out.print(" ");
        }
        //Pika2
        for(int p=1; p <=2*i-1; p++){
           System.out.print("*");
  
        }
  
        System.out.println();
       }}
//VAJA 2
      if(z==2){



//Višina1
for (int i = 1; i <= n-n/2; ++i) {
    //Širina1
    for (int p = 1; p <= n - i; ++p) {
      System.out.print(" ");
    }
//Pika1
    for (int p = 1; p <= 2*i-1; p++) {
        if(p==1 || p==(2*i-1)){
      System.out.print("*");}
        else{
        System.out.print(" ");}
    }

    System.out.println();
  }
  //Višina2
  for(int i=n-(n/2)-1; i >= 1; i--) {
      //Širina2
    for(int j=n-1; j >= i; j--) {
       System.out.print(" ");
    }
    //Pika2
    for(int p=1; p <=2*i-1; p++){
        if(p==1 || p==(2*i-1)){
        System.out.print("*");}
        else{
        System.out.print(" ");}

    }

    System.out.println();
   }//Pika1
      }
// Vaja 2.5
      if(z==3){

   //Višina1
for (int i = 1; i <= n-n/2; ++i) {
    //Širina1
    for (int p = 1; p <= n - i; ++p) {
      System.out.print(" ");
    }
//Pika1
    for (int p = 1; p <= 2*i-1; p++) {
        if(p==1 || p==(2*i-1) || p==i || i==n-n/2){
      System.out.print("*");}
        else{
        System.out.print(" ");}
    }

    System.out.println();
  }
  //Višina2
  for(int i=n-(n/2)-1; i >= 1; i--) {
      //Širina2
    for(int j=n-1; j >= i; j--) {
       System.out.print(" ");
    }
    //Pika2
    for(int p=1; p <=2*i-1; p++){
        if(p==1 || p==(2*i-1) || p==i || i==n-n/2) {
        System.out.print("*");}
        else{
        System.out.print(" ");}
        
    }

    System.out.println();
   }
}


       
 }
}
//Pika1
