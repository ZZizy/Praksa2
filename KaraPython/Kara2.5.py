print("Dobrodošli v programu\n".center(80) +"ENOSTAVNA KARA")
# v = vrstice/visina
v = int(input("\nVnesi pozitivno število za vrsice v kari:\n"))

# o = oblika/izbira
#while True:
#    o = int(input("\nIzberite obliko kare: \n1=polna, \n2=Prazna, \n3=zmaj: \n\n"))
#    if o!=1 and o!=2 and o!=3:
#        print("\nVnesite samo 1-3")
#        continue
#    break
i = 0

for i in range(v):
    print("-" * (v - i), "*" * (2*i + 1))
for i in range(v - 2, -1, -1):
    print("-" * (v - i), "*" * (2*i + 1))

for i in range(v): 
    if (2*i + 1 and i == v+i or i== v-i):print("*")
    else:print("-")
    
for i in range(v - 2, -1, -1):
    print("-" * (v - i), "*" * (2*i + 1))

num = v

for i in range(1, num+1):
  i = i - (num//2 +1)
  if i < 0:
    i = -i
  print(" " * i + "*" * (num - i*2) + " "*i)