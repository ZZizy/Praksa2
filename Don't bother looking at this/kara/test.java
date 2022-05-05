public class test {

   public static void main(String[] args) {
     int n = 7;
     for (int i = 1; i <= n; ++i) {
       for (int p = 1; p <= n - i; ++p) {
         System.out.print("-");
       }
 
       for (int p = 7; p <= 2*i-1; p++) {
         System.out.print("*");
         
       }
 
       System.out.println();
     }
     for(int i=n-1; i >= 1; i--) {
      for(int j=n-1; j >= i; j--) {
         System.out.print("-");
      }
      for(int p=7; p <=2*i-1; p++){
         System.out.print("*");

      }

      System.out.println();
     }
//OBROB
// for first half portion (top to bottom)
for(int i=1; i <= n+1; i++) {
 
   // print space 
   for(int j = i; j <= n; j++) {
      System.out.print("-");
   }

   // print digit or space
   for(int k = 1; k <= 2*i-1; k++) {
      if(k==1 || k==(2*i-1) )
      System.out.print("*");
      else
      System.out.print("-");
   }
 
   // new line
   System.out.println();
}

// for second half portion
for(int i=n; i >= 1; i--) {
 
   // print space
   for(int j=n; j >= i; j--) {
      System.out.print("-");
   }
 
   // print digit or space
   for(int k=1; k <= 2*i-1; k++) {
      if(k==1 || k==(2*i-1) )
      System.out.print("*");
      else
      System.out.print("-");
   }
 
   // new line
   System.out.println();
}
}

}
